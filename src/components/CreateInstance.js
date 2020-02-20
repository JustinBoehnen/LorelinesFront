import React from "react";
import axios from "axios";
import { makeStyles, Grid, Typography, TextField } from "@material-ui/core";

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
    fields: []
  };

  async componentDidMount() {
    axios
      .get(
        "http://localhost:8080/api/lorelines/5e44c8b56a5d003218847a9f/entities/5e44cf2f6a5d003218847aa1/content"
      )
      .then(response => {
        const fields = response.data;
        this.setState({ fields });
      });
  }

  render() {
    return (
      <ul>
        <Typography>Create new instance</Typography>
        {this.state.fields.map(function(field, index) {
          return (
            <li key={index}>
              <Typography> {field.name} </Typography>
              <TextField id="outlined-basic" varient="outlined" />
            </li>
          );
        })}
        <button>Submit</button>
      </ul>
    );
  }
}
