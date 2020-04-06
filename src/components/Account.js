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

  return (
    <main className={classes.root}>
      <Grid
        style={{
          height: props.window.height,
          textAlign: 'left'
        }}
        direction='column'
        justify='center'
        alignItems='center'
        container
      > 
        <Grid item>
          <Typography>
            Hello, {props.user.name || 'null'}, this is your account view
          </Typography>
        </Grid>
        <Grid item>
          <Typography>Email: {props.user.email || 'null'}</Typography>
          <Typography>
            Lorelines: <b>3/5</b>
          </Typography>
          <Typography>Member Since: 12/02/19</Typography>
        </Grid>
      </Grid>
    </main>
  )
})

function mapStateToProps(state) {
  return {
    user: state.user,
    window: state.window
  }
}
