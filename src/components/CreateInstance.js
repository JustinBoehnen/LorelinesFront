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
  state = {
    fields: [],
    name: []
  };

  SaveInstance(event) {
    const e = event.nativeEvent;
    console.log(e.target[0].value);
    console.log(e.target[1].value);
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
