import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import axios from "axios";
import {
  makeStyles,
  Grid,
  Typography,
  TextField,
  Button,
  InputAdornment,
} from "@material-ui/core";
import Mail from "@material-ui/icons/Mail";
import { setLoading } from "../../actions/index";
import SelectInput from "@material-ui/core/Select/SelectInput";

const useStyles = makeStyles((theme) => ({
  content: {
    flexGrow: 1,
  },
  link: {
    color: theme.palette.secondary.main,
    textDecoration: "underline",
  },
  field: {
    width: "20vw",
    minWidth: "250px",
  },
  error: {
    color: theme.palette.error.main,
  },
}));

export default connect(
  mapStateToProps,
  matchDispatchToProps
)(function ForgotPassword(props) {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [submitAttempted, setSubmitAttempt] = useState(false);
  const [id, setID] = useState("");
  const [idObj, setIdObj] = useState("");
  const [notFound, setNotFound] = useState(false);
  const [response, setResponse] = useState(false);
  const [disableBut, setDisabled] = useState(true);
  const [directory, setDirectory] = useState("/forgot");

  useEffect(() => {
    if (props.user.id !== undefined) {
      setDisabled(false);
      setDirectory("/forgot/security");
      console.log("changing route", props.user.id);
    } else {
      setDisabled(true)
    }
  });

  const GetUserId = async () => {
    try {
      const response =  await axios.get(
        `https://lorelines-expressapi.herokuapp.com/api/users/${email}/getuser`
      )
      console.log(response.data)
      SetPropId(response.data);
      setSubmitAttempt(true)
    } catch (err) {}
  };

  const SetPropId = (resid) => {
    setIdObj(resid);
    console.log("object id:", idObj);
    if(idObj === "")
    { 
      setNotFound(true)
    }
    else
    {
      setNotFound(false)
    }

    idObj.map((res) => {
      setID(res._id);
    });

    props.user.id = id;
    console.log(id);
  };

  const onEmailChange = (e) => setEmail(e.target.value);

  const onSubmit = (e) => {
    setSubmitAttempt(true);
    GetUserId();
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
            Enter in your lorelines email:
          </Typography>
        </Grid>
        <Grid item>
          <TextField
            className={classes.field}
            name="email"
            label="Email"
            margin="normal"
            variant="outlined"
            autoComplete="off"
            value={email}
            onChange={onEmailChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Mail color="secondary" />
                </InputAdornment>
              ),
            }}
            error={(submitAttempted && email === "") || notFound === true}
            helperText={
              (submitAttempted && email === ""
                ? "this field cannot be empty"
                : "") || (notFound === true ? "Email not found" : "")
            }
          ></TextField>
        </Grid>
        <Grid container direction="row" justify="center" alignItems="center">
          <Grid item>
            <Button
              style={{
                marginTop: 16,
                padding: 5,
                fontSize: 18,
                borderRadius: "50px",
                width: "130px",
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
            <Button
              style={{
                marginTop: 16,
                marginLeft: 5,
                padding: 5,
                fontSize: 18,
                borderRadius: "50px",
                width: "130px",
              }}
              type="submit"
              disabled={disableBut}
              color="primary"
              variant="contained"
            >
              <Link
                style={{
                  color: "inherit",
                  textDecoration: "none",
                }}
                to={directory}
              >
                Next Page
              </Link>
            </Button>
          </Grid>
        </Grid>
        <Grid item>
          <Typography>
            <Link className={classes.link} to="/">
              return to login
            </Link>
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
  return bindActionCreators(
    {
      setLoading: setLoading,
    },
    dispatch
  );
}
