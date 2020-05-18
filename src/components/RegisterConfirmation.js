import React from 'react'
import { Link } from 'react-router-dom'
import { makeStyles, Grid, Typography } from '@material-ui/core'
//******************************************************************************
// RegisterConfirmation.js
// Holds the RegisterConfirmation function that displays a message upon 
// successfully creating a Lorelines account
//
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  link: {
    color: theme.palette.secondary.main,
    textDecoration: 'underline'
  }
}))

export default function RegisterForm() {
  const classes = useStyles()

  return (
    <main className={classes.root}>
      <Grid
        style={{ minHeight: '100vh', textAlign: 'center' }}
        direction='column'
        justify='center'
        alignItems='center'
        container
      >
        <Grid item>
          <Typography>Thank you for creating a Lorelines account</Typography>
        </Grid>
        <Grid item>
          <Typography>
            <Link className={classes.link} to='/'>
              return to login
            </Link>
          </Typography>
        </Grid>
      </Grid>
    </main>
  )
}
