import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
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
  const [securityPassword, setSecurityPassword] = useState("");
  const [submitAttempted, setSubmitAttempted] = useState(false)
  
  useEffect(() => {
    GetSeqQuestion();
  }, []);

  const onAnswerChange = (e) => setSecurityPassword(e.target.value);

  const GetSeqQuestion = async () => {
    try {
      const response = await axios.get(
        `https://lorelines-expressapi.herokuapp.com/api/users/${props.user.id}/securityQuestion`
      );
      console.log(response.data);
      setQuestion(response.data);
    } catch (err) {}
  };

  const CheckQuestion = async () => {
    try {
      const response = await axios.get(
        `https://lorelines-expressapi.herokuapp.com/api/users/${props.user.id}/recover`,
        {
          securityPassword
        }
      );
      console.log(response.data);
      setQuestion(response.data);
    } catch (err) {}
  };

  const onSubmit = async (e) => {
    e.preventDefault();
      setSubmitAttempted(true)
  }
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
        <TextField
          className={classes.field}
          name="answer"
          label="Answewr"
          margin="normal"
          variant="outlined"
          autoComplete="off"
          value={securityPassword}
          onChange={onAnswerChange}
          error={submitAttempted && securityPassword === ""}
          helperText={
            submitAttempted && securityPassword === "" ? "this field cannot be empty" : ""
          }
        ></TextField>
      </Grid>
      <Grid item>
        <Button
          style={{
            marginTop: 16,
            padding: 5,
            fontSize: 22,
            borderRadius: "50px",
            width: "260px",
          }}
          type="submit"
          color="primary"
          variant="contained"
          onClick={onSubmit}
        >
          Submit
        </Button>
      </Grid>
      <Grid item>
        <Typography>
          <Link className={classes.link} to="/">
            return to login
          </Link>
        </Typography>
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
