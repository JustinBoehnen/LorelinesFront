/** @format */

import React from 'react'
import { connect } from 'react-redux'
import { makeStyles, Grid, Typography } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  link: {
    color: theme.palette.secondary.main,
    textDecoration: 'underline'
  }
}))

export default connect(mapStateToProps)(function Account(props) {
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
            Email: {props.user.email || 'null'}
            </Typography>
          <Typography variant="h5" gutterBottom>
            Lorelines: {props.lorelineArray.length || 'null'}
            <b>/100</b>
          </Typography>
          <Typography variant="h5" gutterBottom>
            Member Since: {date.toString() || 'null'}
          </Typography>
        </Grid>
      </Grid>
    </main>
  )
})

function mapStateToProps(state) {
  return {
    user: state.user,
    window: state.window,
    lorelineArray: state.lorelineArray
  }
}
