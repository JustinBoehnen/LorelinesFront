/** @format */

import React from 'react'
import { connect } from 'react-redux'
import { makeStyles, Grid, Typography } from '@material-ui/core'
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

function handleDark(e) {
  this.props.setTheme('dark');
  console.log("DARK THEME >.<");
}

function handleLight(e) {
  this.props.setTheme('light');
  console.log("LIGHT THEME 0_0");
}

export default connect(mapStateToProps, matchDispatchToProps)(function Account(props) {
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
            Hello, {props.user.name || 'null'}, this is your account view
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
            Website Theme
          </Typography>
          <button onClick={handleDark}>
            Dark
          </button>
          <button onClick={handleLight}>
            Light
          </button>
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
    theme: state.theme
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