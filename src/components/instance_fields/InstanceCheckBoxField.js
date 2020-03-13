/** @format */

import React from 'react';
import {
  makeStyles,
  Card,
  Checkbox,
  FormControlLabel
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    flex: 1
  },
  card: {
    width: 300,
    padding: 10,
    textAlign: 'center'
  }
}));

export default function InstanceCheckBoxField(props) {
  const classes = useStyles();

  return (
    <main className={classes.root}>
      <Card className={classes.card}>
        <FormControlLabel
          control={<Checkbox color="primary" />}
          label={props.label}
          labelPlacement="start"
        />
      </Card>
    </main>
  );
}