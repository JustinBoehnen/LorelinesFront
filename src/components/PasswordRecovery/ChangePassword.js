//******************************************************************************
// src/PasswordRecovery/ChangePassword.js
// Contains the function that provides the dialog to change a users
// password
//
import React, { useState } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";
import {
  Grid,
  Typography,
  TextField,
  Button,
  makeStyles,
  IconButton,
  InputAdornment,
} from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";

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
)(function ChangePassword(props) {
  const classes = useStyles();
  const [password, setNewPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);
  const [showPassword, setShowPassword] = React.useState(false);
  const [submitAttempted, setSubmitAttempt] = React.useState(false);
  const [disableBut, setDisabled] = useState(true);
  const [directory, setDirectory] = React.useState("/forgot/change");

  const onNewPasswordChange = (e) => setNewPassword(e.target.value);

  const onConfirmPasswordChange = (e) => setConfirmPassword(e.target.value);

  const handleClickShowPassword = () => {
    if (showPassword === false) setShowPassword(true);
    else setShowPassword(false);
  };

  const handleClickShowConfirmPassword = () => {
    if (showConfirmPassword === false) setShowConfirmPassword(true);
    else setShowConfirmPassword(false);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const ChangePassword = async () => {
    try {
      if (password !== "") {
        if (password === confirmPassword) {
          const response = await axios.post(
            `https://lorelines-expressapi.herokuapp.com/api/users/${props.user.id}/changePassword`,
            {
              password,
            }
          );
          console.log(response.data);
          if (response.data === "OK") {
            setDirectory("/forgot/confirmation");
            setDisabled(false);
          }
        }
      }
    } catch (err) {}
  };

  const onSubmit = (e) => {
    e.preventDefault();
    ChangePassword();
    setSubmitAttempt(true);
  };
  return (
    <main className={classes.root}>
      <form>
        <Grid
          style={{ minHeight: "100vh", textAlign: "center" }}
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
              Set your new password
            </Typography>
          </Grid>
          <Grid item>
            <TextField
              className={classes.field}
              name="pass"
              label="New Password"
              margin="normal"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={onNewPasswordChange}
              error={submitAttempted && password === ""}
              helperText={
                submitAttempted && password === ""
                  ? "this field cannot be empty"
                  : ""
              }
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item>
            <TextField
              className={classes.field}
              name="confirmpass"
              label="Confirm Password"
              margin="normal"
              type={showConfirmPassword ? "text" : "password"}
              value={confirmPassword}
              onChange={onConfirmPasswordChange}
              error={
                password !== confirmPassword ||
                (submitAttempted && confirmPassword === "")
              }
              helperText={
                submitAttempted && confirmPassword === ""
                  ? "this field cannot be empty"
                  : "" || password !== confirmPassword
                  ? "passwords do not match"
                  : ""
              }
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowConfirmPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {showConfirmPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
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
        </Grid>
      </form>
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
