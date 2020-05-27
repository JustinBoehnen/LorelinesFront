/** @format */
//******************************************************************************
// src/instance_fields/InstanceTextField.js
// Contains the function to create instance text fields
//
//
import React from "react";
import { makeStyles, Grid, Card, InputBase } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flex: 1,
  },
  card: {
    minWidth: 300,
    padding: 10,
  },
  input: {
    flex: 1,
  },
}));

export default function InstanceTextField(props) {
  const classes = useStyles();

  const handleChange = (e) => {
    props.setContent(props.index, e.target.value);
  };

  return (
    <main className={classes.root}>
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
                multiline
                rowsMax="4"
                value={props.content}
                onChange={handleChange}
                className={classes.input}
                placeholder="Content"
                fullWidth
                inputProps={{
                  dataTestId: "fieldContent",
                }}
              />
            </Grid>
          </Grid>
        </Grid>
      </Card>
    </main>
  );
}
