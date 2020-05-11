import React, { useState } from "react";
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
  const [respnse, setResponse] = useState(false);

  const GetUserId = async () => {
    props.setLoading(true);
    try {
      let response = await axios.get(
        `https://lorelines-expressapi.herokuapp.com/api/users/${email}/getuser`
      );
      console.log(response.data);
      setIdObj(await response.data);
      console.log(idObj);
      idObj.map((res) => {
        setID(res._id);
      });

      props.user.id = id;
      console.log(id);
      if (props.user.id === "") {
        setNotFound(true);
      } else {
        setNotFound(false);
      }
      if (idObj != "") {
        props.setLoading(false);
      } else {
      }
    } catch (err) {
      props.setLoading(false);
    }
  };

  const onEmailChange = (e) => setEmail(e.target.value);

  const onSubmit = (e) => {
    e.preventDefault();
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
