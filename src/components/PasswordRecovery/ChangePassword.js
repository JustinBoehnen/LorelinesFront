import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {
  Grid,
  Typography,
  TextField,
  Button,
  makeStyles,
  IconButton,
  InputAdornment
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

export default function ChangePassword(props) {
  const classes = useStyles();
  const [newPassword, setNewPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);
  const [showPassword, setShowPassword] = React.useState(false);
  const [submitAttempted, setSubmitAttempt] = React.useState(false);

  const onNewPasswordChange = (e) => setNewPassword(e.target.value);
  const onConfirmPasswordChange = (e) =>
    onConfirmPasswordChange(e.target.value);

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

  const onSubmit = (e) => {
	  e.preventDefault()
    setSubmitAttempt(true)
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
              value={newPassword}
              onChange={onNewPasswordChange}
              error={submitAttempted && newPassword === ""}
              helperText={
                submitAttempted && newPassword === ""
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
                newPassword !== confirmPassword ||
                (submitAttempted && confirmPassword === "")
              }
              helperText={
                submitAttempted && confirmPassword === ""
                  ? "this field cannot be empty"
                  : "" || newPassword !== confirmPassword
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
            <Typography style={{ padding: 5, fontSize: 16 }}>
              <Link className={classes.link} to="/">
                Cancel
              </Link>
            </Typography>
          </Grid>
        </Grid>
      </form>
    </main>
  );
}
