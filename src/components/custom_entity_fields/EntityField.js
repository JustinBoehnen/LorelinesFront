/** @format */

import React from 'react';
import {
  makeStyles,
  Grid,
  Typography,
  Card,
  InputBase,
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

export default function EntityField(props) {
  const classes = useStyles();

  const handleLabelChange = e => {
    props.changeLabel(props.index, e.target.value);
  };

  return (
    <main className={classes.root}>
      <Card className={classes.card}>
        <Grid container direction="column">
          <Grid xs item container direction="row">
            <Grid xs item>
              <InputBase
                className={classes.input}
                placeholder="Label"
                onChange={handleLabelChange}
                value={props.label}
              />
            </Grid>
            <Grid item>
              <Typography variant="overline">{props.typeName}</Typography>
            </Grid>
          </Grid>
          <Grid item>
            <Tooltip title={`Delete ${props.typeName}`}>
              <IconButton
                aria-label="delete"
                className={classes.delete}
                onClick={() => props.remove(props.index)}
              >
                <Delete />
              </IconButton>
            </Tooltip>
          </Grid>
        </Grid>
      </Card>
    </main>
  );
}
