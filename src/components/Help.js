/** @format */
//******************************************************************************
// Help.js
// Help page that contains tutorials for different aspects of Lorelines
//
//
import React from 'react'
import { connect } from 'react-redux'
import Logo from "../images/logo.svg"
import PDF from "../images/DownloadTest.pdf"
import {
  makeStyles,
  Grid,
  Typography,
  Card,
  CardContent
} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  link: {
    color: theme.palette.secondary.main,
    textDecoration: 'underline'
  }
}))

export default connect(mapStateToProps)(function Help(props) {
  const classes = useStyles()

  return (
    <main>
      <Grid
        className={classes.root}
        style={{
          textAlign: 'center',
          height: props.window.height
        }}
        container
        direction='column'
        justify='center'
        alignItems='center'
      >
        <Grid item>
          <Card width='500'>
            <CardContent>
              <Typography
                style={{
                  fontSize: 14
                }}
              >
                Click the Lorelines icon below to download our tutorial PDF:
              </Typography>
              <a href={PDF} download>
                <img src={Logo} alt="DownloadTest" width="104" height="142"></img>
              </a>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </main>
  )
})
//******************************************************************************
// Redux Incoming Variables Function
function mapStateToProps(state) {
  return {
    window: state.window
  }
}
