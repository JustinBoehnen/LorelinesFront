/** @format */

import React from 'react';
import { makeStyles, Grid, Card, InputBase, Tooltip } from '@material-ui/core';

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
  }
}));

export default function InstanceNumberField(props) {
  const classes = useStyles();

  return (
    <main className={classes.root}>
      <Tooltip title="This is a number field">
        <Card className={classes.card}>
          <Grid container direction="column">
            <Grid xs item container direction="row">
              <Grid xs item>
                <InputBase
                  className={classes.input}
                  value={props.label}
                  readOnly
                />
              </Grid>
            </Grid>
            <Grid item>
              <Grid item>
                <InputBase
                  type="number"
                  className={classes.input}
                  placeholder="Content"
                  fullWidth
                />
              </Grid>
            </Grid>
          </Grid>
        </Card>
      </Tooltip>
    </main>
  );
}
