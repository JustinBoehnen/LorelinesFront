import React from "react";
import axios from "axios";
import { makeStyles, Grid, Typography } from "@material-ui/core";

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

  componentDidMount() {
    axios
      .get(
        "http://localhost:8080/api/lorelines/5e44c8b56a5d003218847a9f/entities/5e44cf2f6a5d003218847aa1"
      )
      .then(response => {
        const fields = response.data;
        this.setState;
      });
  }

  render() {
    return <ul>{JSON.stringify(this.state.fields)}</ul>;
  }
}
