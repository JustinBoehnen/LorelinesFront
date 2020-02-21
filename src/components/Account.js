/** @format */

import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { makeStyles, Grid, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  link: {
    color: theme.palette.secondary.main,
    textDecoration: 'underline'
  }
}));

export default connect(mapStateToProps)(function Account(props) {
  const classes = useStyles();
  if (!props.user) {
    return <h2>NULL</h2>;
  }
  return (
    <main className={classes.root}>
      <Grid
        style={{ height: '70vh', width: '70vw', textAlign: 'left' }}
        direction="column"
        justify="center"
        alignItems="center"
        container
      >
        <Grid item>
          <Typography>
            Hello, {props.user.name || 'null'}, this is your account view
          </Typography>
        </Grid>
        <Grid item>
          <Typography>Email: {props.user.email || 'null'}</Typography>
        </Grid>
      </Grid>
    </main>
  );
});

function mapStateToProps(state) {
  return {
    user: state.user
  };
}
