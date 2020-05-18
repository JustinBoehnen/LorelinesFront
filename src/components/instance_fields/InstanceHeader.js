/** @format */
//******************************************************************************
// src/instance_fields/InstanceHeader.js
// Contains the function to create the header for an instance
//
//
import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    flex: 1
  }
}));

export default function InstanceHeader(props) {
  const classes = useStyles();

  return (
    <main className={classes.root}>
      <Typography variant="h5">{props.label}</Typography>
    </main>
  );
}
