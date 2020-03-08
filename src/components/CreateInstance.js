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
    this.state = {
      fields: [],
      name: [],
      snackBarOpen: false,
      lorelineId: "5e44c8b56a5d003218847a9f",
      customEntityId: "5e44cf2f6a5d003218847aa1"
    };
  }

  snackBarClose = event => {
    this.setState({ snackBarOpen: false });
  };

  // Creates a JSON from user input and saves it as an instance of
  // the custom entity designated by state
  handleSubmit(event) {
    event.preventDefault();
    this.setState({ snackBarOpen: true });
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
        console.log("Entity instance addded to database!");
      });
    document.getElementById("EntForm").reset();
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
          <Typography>name</Typography>
          <Input id="outlined-basic" varient="outlined" />
          {this.state.fields.map(function(field, index) {
            return (
              <li key={index}>
                <Typography> {field.name} </Typography>
                <Input id="outlined-basic" varient="outlined" />
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
            message={this.state.name.concat(" added!")}
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
