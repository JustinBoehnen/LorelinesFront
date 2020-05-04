/** @format */

//******************************************************************************
// Account.js
// Account page function that shows user info and theme toggling
//
//
import React from 'react'
import { connect } from 'react-redux'
import { makeStyles, Grid, Typography, Button } from '@material-ui/core'
import { bindActionCreators } from 'redux'
import { setTheme } from '../actions/index'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  link: {
    color: theme.palette.secondary.main,
    textDecoration: 'underline'
  }
}))

//******************************************************************************
// Account Function
// File(s) Used: Home.js
export default connect(mapStateToProps, matchDispatchToProps)(function Account(props) {
  function handleDark(e) {
    props.setTheme('dark');
    console.log("DARK THEME  0_0");
  }
  
  function handleLight(e) {
    props.setTheme('light');
    console.log("LIGHT THEME >.<");
  }
  
  const classes = useStyles()
  if(!props.user.id){
    return <p></p>
  }
  
  var timestamp = props.user.id.toString().substring(0,8);
  var date = new Date(parseInt(timestamp, 16) * 1000);
  return (
    <main className={classes.root}>
      <Grid
        style={{
          height: props.window.height,
          textAlign: 'center'
        }}
        direction='column'
        justify='center'
        alignItems='center'
        container
      > 
        <Grid item>
          <Typography variant="h2" gutterBottom>
            Hello {props.user.name || 'null'}, this is your account view
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="h5" gutterBottom>
            Member Since: {date.toString() || 'null'}
          </Typography>
          <Typography variant="h5" gutterBottom>
            Email: {props.user.email || 'null'}
            </Typography>
          <Typography variant="h5" gutterBottom>
            Lorelines: {props.lorelineArray.length || 'null'}
            <b>/50</b>
          </Typography>
          <Typography variant="h5" gutterBottom>
            Entities: {props.directory.length || 'null'}
            <b>/500</b>
          </Typography>
          <Typography variant="h5" gutterBottom>
            Instances: {props.directory.length || 'null'}
            <b>/1000</b>
          </Typography>
          <Typography variant="h5" gutterBottom>
            Website Theme
          </Typography>
          <Button onClick={handleDark} variant="contained" color="default">
            Dark
          </Button>
          <Button onClick={handleLight} variant="contained" color ="default">
            Light
          </Button>
        </Grid>
      </Grid>
    </main>
  )
})

function mapStateToProps(state) {
  return {
    user: state.user,
    window: state.window,
    lorelineArray: state.lorelineArray,
    theme: state.theme,
    directory: state.directory
  }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      setTheme: setTheme,
    },
    dispatch
  )
}