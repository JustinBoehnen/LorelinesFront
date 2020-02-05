import React from 'react'
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

export default function About() {
  const classes = useStyles()

  return (
    <main>
      <Grid
        className={classes.root}
        style={{ minHeight: '90vh', textAlign: 'center' }}
        container
        justify='center'
        alignItems='center'
      >
        <Grid item xs={3}></Grid>
        <Grid item xs={6}>
          <Typography
            style={{
              fontSize: 14
            }}
          >
            Lorelines.com is the junior project of the Oregon Institute of
            Technology students:
          </Typography>
          <Typography
            style={{
              fontWeight: 500,
              fontSize: 20
            }}
          >
            Justin Boehnen, Evan Clark, Seth Ray, and Isaac Medlin
          </Typography>
          <Typography
            style={{
              fontSize: 14
            }}
          >
            Also Known As...
          </Typography>
          <Typography
            style={{
              padding: 20,
              fontWeight: 600,
              fontSize: 30
            }}
          >
            JESI
          </Typography>
          <Typography
            style={{
              fontSize: 14
            }}
          >
            We hope that our little piece of software helps you build something
            huge.
          </Typography>
        </Grid>
        <Grid item xs={3}></Grid>
      </Grid>
    </main>
  )
}
