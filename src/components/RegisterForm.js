/** @format */
import Recaptcha from "react-recaptcha";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { browserHistory } from "react-router";
import {
  makeStyles,
  TextField,
  Grid,
  Typography,
  InputAdornment,
  IconButton,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@material-ui/core";
import { Visibility, VisibilityOff, Router } from "@material-ui/icons";
import Validator from "email-validator";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  field: {
    width: "30vw",
    minWidth: "250px",
  },
  link: {
    color: theme.palette.secondary.main,
    textDecoration: "underline",
  },
  error: {
    color: theme.palette.error.main,
  },
  formControl: {
    width: "30vw",
    minWidth: "250px",
  },
}));

export default function RegisterForm(props) {
  const classes = useStyles();
  const [verified, setVerified] = React.useState(false);
  const [securityOpen, setSecurityOpen] = React.useState(false);
  const [accountCreated, setAccountCreated] = React.useState(false);
  const [directory, setDirectory] = React.useState("/register");
  const [values, setValues] = React.useState({
    name: "",
    email: "",
    confirmEmail: "",
    password: "",
    confirmPassword: "",
    securityQ: "",
    securityAnswer: "",
    showPassword: false,
    showConfirmPassword: false,
    showSecurityAnswer: false,
    submitAttempted: false,
    emailExists: false,
  });
  useEffect(() => {
    console.log("useEffect Called");
    if (Validator.validate(values.email) === true)
      if (values.email === values.confirmEmail)
        if (values.password !== "")
          if (values.password === values.confirmPassword)
            if (values.securityQ !== "")
              if (values.securityAnswer !== "") {
                console.log("changing router path");
                setDirectory("/register/confirm");
                console.log(directory);
              }
  });
  const recaptchaLoaded = () => {
    console.log("RecaptchLoaded");
  };
  const verifiedCallback = (response) => {
    if (response) setVerified(true);
  };
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleSecurityOpen = () => {
    setSecurityOpen(true);
  };

  const handleSecurityClose = () => {
    setSecurityOpen(false);
  };
  const handleClickShowConfirmPassword = () => {
    setValues({ ...values, showConfirmPassword: !values.showConfirmPassword });
  };
  const handleClickShowSecurityAnswer = () => {
    setValues({ ...values, showSecurityAnswer: !values.showSecurityAnswer });
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setValues({ ...values, submitAttempted: true });
    if (verified === false) {
      alert("Please verify that you are a human!");
    } else {
      if (Validator.validate(values.email) === true)
        if (values.email === values.confirmEmail)
          if (values.password !== "")
            if (values.password === values.confirmPassword)
              if (values.securityQ !== "")
                if (values.securityAnswer !== "") {
                  let exists = !props.createUser(
                    values.name,
                    values.email,
                    values.password,
                    values.securityQ,
                    values.securityAnswer
                  );
                  setAccountCreated(true);
                  setValues({ ...values, emailExists: exists });
                }
    }
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
              Create a new Lorelines account
            </Typography>
          </Grid>
          {values.emailExists && (
            <Grid item>
              <Typography
                className={classes.error}
                style={{ padding: 5, fontSize: 16 }}
              >
                a user with that email already exists
              </Typography>
            </Grid>
          )}
          <Grid item>
            <TextField
              className={classes.field}
              name="name"
              label="Name"
              margin="normal"
              value={values.name}
              onChange={handleChange("name")}
              error={values.submitAttempted && values.name === ""}
              helperText={
                values.submitAttempted && values.name === ""
                  ? "this field cannot be empty"
                  : ""
              }
            />
          </Grid>
          <Grid item>
            <TextField
              className={classes.field}
              name="email"
              label="Email"
              margin="normal"
              value={values.email}
              onChange={handleChange("email")}
              error={
                (values.submitAttempted && values.email === "") ||
                (values.submitAttempted &&
                  Validator.validate(values.email) === false)
              }
              helperText={
                values.submitAttempted && values.email === ""
                  ? "this field cannot be empty"
                  : "" ||
                    (values.submitAttempted &&
                      Validator.validate(values.email) === false)
                  ? "invalid email address"
                  : ""
              }
            />
          </Grid>
          <Grid item>
            <TextField
              className={classes.field}
              name="confirmEmail"
              label="Confirm Email"
              margin="normal"
              value={values.confirmEmail}
              onChange={handleChange("confirmEmail")}
              error={
                values.email !== values.confirmEmail ||
                (values.submitAttempted && values.confirmEmail === "")
              }
              helperText={
                values.submitAttempted && values.confirmEmail === ""
                  ? "this field cannot be empty"
                  : "" || values.email !== values.confirmEmail
                  ? "emails do not match"
                  : ""
              }
            />
          </Grid>
          <Grid item>
            <TextField
              className={classes.field}
              name="pass"
              label="Password"
              margin="normal"
              type={values.showPassword ? "text" : "password"}
              value={values.password}
              onChange={handleChange("password")}
              error={values.submitAttempted && values.password === ""}
              helperText={
                values.submitAttempted && values.password === ""
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
                      {values.showPassword ? <Visibility /> : <VisibilityOff />}
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
              type={values.showConfirmPassword ? "text" : "password"}
              value={values.confirmpassword}
              onChange={handleChange("confirmPassword")}
              error={
                values.password !== values.confirmPassword ||
                (values.submitAttempted && values.confirmPassword === "")
              }
              helperText={
                values.submitAttempted && values.confirmPassword === ""
                  ? "this field cannot be empty"
                  : "" || values.password !== values.confirmPassword
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
                      {values.showConfirmPassword ? (
                        <Visibility />
                      ) : (
                        <VisibilityOff />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item>
            <FormControl className={classes.formControl}>
              <InputLabel id="demo-controlled-open-select-label">
                Security Question
              </InputLabel>
              <Select
                labelId="demo-controlled-open-select-label"
                id="demo-controlled-open-select"
                open={securityOpen}
                onClose={handleSecurityClose}
                onOpen={handleSecurityOpen}
                value={values.securityQ}
                onChange={handleChange("securityQ")}
                error={values.submitAttempted && values.securityQ === ""}
                helperText={
                  values.submitAttempted && values.securityQ === ""
                    ? "this field cannot be empty"
                    : ""
                }
              >
                <MenuItem value={"What was the model of your first car?"}>
                  What was the model of your first car?
                </MenuItem>
                <MenuItem value={"What's your favorite pets name?"}>
                  What's your favorite pets name?
                </MenuItem>
                <MenuItem value={"What was your childhood nickname?"}>
                  What was your childhood nickname?
                </MenuItem>
                <MenuItem
                  value={"What school did you attend during the sixth grade?"}
                >
                  What school did you attend during the sixth grade?
                </MenuItem>
                <MenuItem value={"What town was your first job in?"}>
                  What town was your first job in?
                </MenuItem>
                <MenuItem
                  value={"Who was your favorite teacher in highschool?"}
                >
                  Who was your favorite teacher in highschool?
                </MenuItem>
                <MenuItem
                  value={
                    "What is the first name of the boy or girl that you first kissed?"
                  }
                >
                  What is the first name of the boy or girl that you first
                  kissed?
                </MenuItem>
                <MenuItem value={"What is your oldest sibling's middle name?"}>
                  What is your oldest sibling's middle name?
                </MenuItem>
                <MenuItem value={"Who was your childhood hero?"}>
                  Who was your childhood hero?
                </MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid Item>
            <TextField
              className={classes.field}
              name="SecurityAnswer"
              label="Security Question Answer"
              margin="normal"
              type={values.showSecurityAnswer ? "text" : "password"}
              value={values.confirmpassword}
              onChange={handleChange("securityAnswer")}
              error={values.submitAttempted && values.securityAnswer === ""}
              helperText={
                values.submitAttempted && values.securityAnswer === ""
                  ? "this field cannot be empty"
                  : ""
              }
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle answer visibility"
                      onClick={handleClickShowSecurityAnswer}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {values.showSecurityAnswer ? (
                        <Visibility />
                      ) : (
                        <VisibilityOff />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item>
            <Recaptcha
              sitekey="6LeRQ-oUAAAAAP4frfdbHtXO80ADJe1kD3tAF-k2"
              render="explicit"
              verifyCallback={verifiedCallback}
              onloadCallback={recaptchaLoaded}
              theme="dark"
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
              <Link
                style={{
                  color: "inherit",
                  textDecoration: "none",
                }}
                to={directory}
              >
                Submit
              </Link>
            </Button>
          </Grid>

          <Grid item>
            <Typography style={{ padding: 5, fontSize: 16 }}>
              <Link className={classes.link} to="/">
                Go back
              </Link>
            </Typography>
          </Grid>
        </Grid>
      </form>
    </main>
  );
}
