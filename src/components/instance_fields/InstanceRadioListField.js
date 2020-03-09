/** @format */

import React from 'react';
import {
  makeStyles,
  Grid,
  Card,
  InputBase,
  RadioGroup,
  FormControlLabel,
  Radio
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    flex: 1
  },
  card: {
    minWidth: 300,
    padding: 10
  }
}));

export default function InstanceRadioListField(props) {
  const [value, setValue] = React.useState('[object Object]0');

  const handleChange = event => {
    setValue(event.target.value);
  };

  const classes = useStyles();

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
            <Grid item style={{ textAlign: 'center' }}>
              <RadioGroup value={value} onChange={handleChange}>
                {props.options.map((option, i) => {
                  return (
                    <FormControlLabel
                      key={option + i}
                      value={option + i}
                      control={<Radio color="primary" />}
                      label={option.name}
                      labelPlacement="start"
                    />
                  );
                })}
              </RadioGroup>
            </Grid>
          </Grid>
        </Grid>
      </Card>
    </main>
  );
}
