import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import axios from "axios";
import {
  makeStyles,
  Grid,
  Typography,
  TextField,
  Button,
  Input,
  Snackbar,
  IconButton
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { setLoreline } from "../actions/index";

class CreateInstance extends React.Component {
  // This constructor binds state editing functions to this instance
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.snackBarClose = this.snackBarClose.bind(this);
    this.onInstanceNameChange = this.onInstanceNameChange.bind(this);
    this.state = {
      fields: [],
      name: [],
      snackBarOpen: false,
      snackBarMessage: "",
      lorelineId: "5e64384078b19e2300adef1a",
      customEntityId: "5e643bf24603171cb0670632",
      instanceName: "",
      submitAttempted: false
    };
  }

  snackBarClose = event => {
    this.setState({ snackBarOpen: false });
  };

  // Creates a JSON from user input and saves it as an instance of
  // the custom entity designated by state
  handleSubmit(event) {
    event.preventDefault();
    this.state.submitAttempted = true;
    if(this.state.instanceName !== "")
    {
      this.state.submitAttempted = false;
    const e = event.nativeEvent;
    var save = {
      name: String,
      content: []
    };
    var temp;
    save.name = e.target[0].value;
    this.state.fields.map(function(field, index) {
      temp = {
        content: [],
        type: Number,
        name: String
      };
      temp.content = e.target[index + 1].value;
      temp.type = field.type;
      temp.name = field.name;
      save.content.push(temp);
    });
    axios
      .post(
        `http://localhost:8080/api/lorelines/${this.state.lorelineId}/entities/${this.state.customEntityId}/instances`,
        save
      )
      .then(() => {
        this.setState({ snackBarMessage: this.state.name.concat(" added!") });
        this.setState({ snackBarOpen: true });
        console.log("Entity instance addded to database!");
      })
      .catch(() => {
        this.setState({
          snackBarMessage: "Error adding ".concat(this.state.name).concat(".")
        });
        this.setState({ snackBarOpen: true });
      });
    document.getElementById("EntForm").reset();
    }
  }
  // When the component is linked to, it does this gets to initialize its state
  async componentDidMount() {
    axios
      .get(
        `http://localhost:8080/api/lorelines/${this.state.lorelineId}/entities/${this.state.customEntityId}`
      )
      .then(response => {
        const fields = response.data.content;
        this.setState({ fields });
        const name = response.data.name;
        this.setState({ name });
      });
  }
  onInstanceNameChange = e => {
    this.setState({instanceName: e.target.value});
  }
  // creates a dynamic display based on the designated custom entity
  render() {
    return (
      <ul>
        <Typography
          style={{
            marginTop: 5,
            marginInlineStart: 20,
            marginBottom: 5,
            fontSize: 22,
            borderRadius: "50px",
            width: "150px"
          }}
          varient="contained"
          color="primary"
        >
          Add {this.state.name}
        </Typography>
        <form id="EntForm" onSubmit={this.handleSubmit}>
          <TextField
                error={this.state.submitAttempted && this.state.instanceName === ""}
                helperText={
                  this.state.submitAttempted && this.state.instanceName === ""
                    ? "This field cannot be empty!"
                    : ""
                }
                autoFocus
                name="InstanceName"
                label="Name"
                margin="dense"
                autoComplete="off"
                value={this.state.instanceName}
                onChange={this.onInstanceNameChange}
                fullWidth
              />
          {this.state.fields.map(function(field, index) {
            return (
              <li key={index}>
                <TextField
                name="InstanceName"
                label={field.name}
                margin="dense"
                autoComplete="off"
                fullWidth
              />
              </li>
            );
          })}
          <Button
            style={{
              maxWidth: "90px",
              maxHeight: "55px",
              minWidth: "90px",
              minHeight: "55px",
              marginInlineStart: 10,
              marginTop: 16,
              padding: 5,
              fontSize: 15,
              borderRadius: "50px",
              width: "150px"
            }}
            color="primary"
            type="submit"
            variant="contained"
          >
            Submit
          </Button>
          <Snackbar
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left"
            }}
            open={this.state.snackBarOpen}
            autoHideDuration={6000}
            onClose={this.snackBarClose}
            message={this.state.snackBarMessage}
            action={
              <React.Fragment>
                <IconButton
                  size="small"
                  aria-label="close"
                  color="inherit"
                  onClick={this.snackBarClose}
                >
                  <CloseIcon fontSize="small" />
                </IconButton>
              </React.Fragment>
            }
          />
        </form>
      </ul>
    );
  }
}

function mapStatetoProps(state) {
  return {
    lorelineId: state.lorelineId,
    customEntityId: state.customEntityId
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({ setLoreLine: setLoreline }, dispatch);
}

export default connect(mapStatetoProps, matchDispatchToProps)(CreateInstance);
