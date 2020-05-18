import React from "react";
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
  makeStyles
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  field: {
    width: "23vw",
    minWidth: "250px",
  },
  link: {
    color: theme.palette.secondary.main,
    textDecoration: "underline",
  },
  error: {
    color: theme.palette.error.main,
  },
}));

export default connect(
  mapStateToProps,
  matchDispatchToProps
)(function SecurityQ(props) {

  const classes = useStyles()

  return <main className={classes.root}></main>;
});

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators(
    {
    },
    dispatch
  );
}
