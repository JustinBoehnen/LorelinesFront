import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { makeStyles, Grid, Typography, TextField, Button, InputAdornment } from "@material-ui/core";
import Mail from '@material-ui/icons/Mail'

const useStyles = makeStyles(theme => ({
  content: {
    flexGrow: 1
  },
  link: {
    color: theme.palette.secondary.main,
    textDecoration: 'underline'
  },
  field: {
    width: '20vw',
    minWidth: '250px'
  },
  error: {
    color: theme.palette.error.main
  }
}));

export default connect(
	mapStateToProps,
	matchDispatchToProps
)(function ForgotPassword(props) {
  const classes = useStyles();
  const [email, setEmail] = useState("")
  const [submitAttempted, setSubmitAttempt] = useState(false)

  const onEmailChange = e => setEmail(e.target.value);

  const onSubmit = (e) => {
    setSubmitAttempt(true)
    
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
              )
            }}
            error={
              (submitAttempted && email === '')
            }
            helperText={
              submitAttempted && email === ''
                ? 'this field cannot be empty' : ''
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
})

function mapStateToProps(state) {
	return {
		user: state.user,
	}
}

function matchDispatchToProps(dispatch) {
	return bindActionCreators(
		{
		},
		dispatch
	)
}