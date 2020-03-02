/** @format */

import React from 'react';
import {
  makeStyles,
  Grid,
  Typography,
  Card,
  TextField,
  InputBase,
  CardHeader,
  CardContent,
  CardActions,
  IconButton
} from '@material-ui/core';
import { Delete } from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
  root: {
    flex: 1
  },
  card: {
    minWidth: 300,
    padding: 10
  },
  input: {
    flex: 1
  },
  delete: {
    marginLeft: 'auto'
  },
  content: {
    flex: 1
  }
}));

export default function EntityTextField() {
  const classes = useStyles();

  return (
    <main className={classes.root}>
      <Card className={classes.card}>
        <Grid container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <InputBase className={classes.input} placeholder="Label" />
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant="overline">TEXT</Typography>
          </Grid>
        </Grid>
        <Grid container direction="column">
          <Grid item>
            <InputBase
              multiline
              className={classes.input}
              placeholder="Content"
              fullWidth
            />
          </Grid>
          <Grid item>
            <IconButton aria-label="delete" className={classes.delete}>
              <Delete />
            </IconButton>
          </Grid>
        </Grid>
      </Card>
    </main>
  );
}
