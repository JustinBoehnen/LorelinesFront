/** @format */

import React from 'react';
import { makeStyles, Divider } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    flex: 1
  }
}));

export default function InstanceDivider(props) {
  const classes = useStyles();

  return (
    <main className={classes.root}>
      <Divider />
    </main>
  );
}
