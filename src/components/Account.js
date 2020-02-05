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

export default function Account() {
  const classes = useStyles()

  return (
    <main className={classes.root}>
      <Grid
        style={{ height: '70vh', width: '70vw', textAlign: 'center' }}
        direction='column'
        justify='center'
        alignItems='center'
        container
      >
        <Grid item>
          <Typography>This is the Account page yo</Typography>
        </Grid>
      </Grid>
    </main>
  )
}
