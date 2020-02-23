import React from "react";
import axios from "axios";
import {
  makeStyles,
  Grid,
  Typography,
  TextField,
  Button
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  link: {
    color: theme.palette.secondary.main,
    textDecoration: "underline"
  }
}));

export default class CreateInstance extends React.Component {
  constructor() {
    super();
    this.SaveInstance = this.SaveInstance.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
  }
  state = {
    fields: [],
    name: []
  };

  SaveInstance(event) {
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
  }

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

  render() {
    return (
      <ul>
        <Typography>{this.state.name}</Typography>
        <form onSubmit={this.SaveInstance}>
          <Typography>name</Typography>
          <input id="outlined-basic" varient="outlined" />
          {this.state.fields.map(function(field, index) {
            return (
              <li key={index}>
                <Typography> {field.name} </Typography>
                <input id="outlined-basic" varient="outlined" />
              </li>
            );
          })}
          <Button type="submit">Submit</Button>
        </form>
      </ul>
    );
  }
}
