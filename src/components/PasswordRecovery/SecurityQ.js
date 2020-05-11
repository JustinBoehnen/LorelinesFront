import React, { useEffect, useState } from 'react'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import axios from "axios";
import { setLoading } from "../../actions/index";
import {
  Grid,
  Typography,
  makeStyles,
  TextField,
  Button,
  Input,
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
  const classes = useStyles();
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
        useEffect(() => {
          GetSeqQuestion();
        }, []);

  const GetSeqQuestion = async () => {
    try {
      const response = await axios.get(
        `https://lorelines-expressapi.herokuapp.com/api/users/${props.user.id}/securityQuestion`
      );
      console.log(response.data);
      setQuestion(response.data);
    } catch (err) {}
  };
  return (
    <main className={classes.root}>
      <Grid
        style={{ height: "100vh", textAlign: "center" }}
        direction="column"
        justify="center"
        alignItems="center"
        container
      >
          <Grid item>
          <Typography
            style={{
              padding: 2,
              fontWeight: "bold",
              fontSize: 42,
            }}
            >
            {question}
          </Typography>
        </Grid>
      </Grid>
    </main>
  );
});

function mapStateToProps(state) {
  return {
    user: state.user,
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch);
}
