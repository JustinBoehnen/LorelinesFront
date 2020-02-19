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

async function getEntity() {
  return await axios
    .get(
      "http://localhost:8080/api/lorelines/5e44c8b56a5d003218847a9f/entities/5e44cf2f6a5d003218847aa1"
    )
    .then(response => {
      return response.data;
    });
}

export default async function CreateInstance() {
  const classes = useStyles();
  //this gets a specific custom entity, later it will get one designated by other code
  let entity = await getEntity();
  var display = JSON.stringify(entity);
  return <main>{display}</main>;
}
