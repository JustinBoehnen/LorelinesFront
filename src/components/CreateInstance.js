//******************************************************************************
// CreateInstance.js
// Holds component that creates an Instance JSON object
//
//
import React from "react";
import axios from "axios";
import {
  makeStyles,
  Grid,
  Typography,
  TextField,
  Button,
  Input
} from "@material-ui/core";

export default class CreateInstance extends React.Component {
  // This constructor binds state editing functions to this instance
  constructor() {
    super();
    this.SaveInstance = this.SaveInstance.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
  }
  state = {
    fields: [],
    name: []
  };
  // Creates a JSON from user input and saves it as an instance of
  // the custom entity designated by state
  SaveInstance(event) {
    event.preventDefault();
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
    console.log(JSON.stringify(save));
    axios
      .post(
        "http://localhost:8080/api/lorelines/5e44c8b56a5d003218847a9f/entities/5e44cf2f6a5d003218847aa1/instances",
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
        "http://localhost:8080/api/lorelines/5e44c8b56a5d003218847a9f/entities/5e44cf2f6a5d003218847aa1/content"
      )
      .then(response => {
        const fields = response.data;
        this.setState({ fields });
      });
    axios
      .get(
        "http://localhost:8080/api/lorelines/5e44c8b56a5d003218847a9f/entities/5e44cf2f6a5d003218847aa1/name"
      )
      .then(response => {
        const name = response.data;
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
        <form id="EntForm" onSubmit={this.SaveInstance}>
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
        </form>
      </ul>
    );
  }
}
