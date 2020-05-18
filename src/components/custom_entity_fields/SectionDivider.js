/** @format */
//******************************************************************************
// src/custom_entity_fields/SectionDivider.js
// Contains Section Divider function, for use w/ the directory
//
//
import React from 'react';
import {
  makeStyles,
  Grid,
  Typography,
  Card,
  IconButton,
  Tooltip
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

export default function SectionDivider(props) {
  const classes = useStyles();

  return (
    <main className={classes.root}>
      <Card className={classes.card}>
        <Grid container direction="column">
          <Grid xs item container direction="row">
            <Grid xs item>
              <Tooltip title="Delete divider">
                <IconButton
                  aria-label="delete"
                  className={classes.delete}
                  onClick={() => props.remove(props.index)}
                >
                  <Delete />
                </IconButton>
              </Tooltip>
            </Grid>
            <Grid item>
              <Typography variant="overline">DIVIDER</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Card>
    </main>
  );
}
