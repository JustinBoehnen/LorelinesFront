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
  /*
    function FetchComponents() {
        return (
            //Need route for getting objects containing all components in a timeline
        )
    }

    const RenderComponents = e => {
        return (
            <Button className={classes.logoutButton} onClick={props.logout}>
              Log Out
            </Button>
        )
    }
    */
  return (
    <html>
      <body>
        <canvas
          id='myCanvas'
          width='200'
          height='100'
          style='border:1px solid #d3d3d3;'
        >
          Your browser does not support the HTML5 canvas tag.
        </canvas>

        <script>
          var c = document.getElementById("myCanvas"); var ctx =
          c.getContext("2d"); // Create gradient var grd =
          ctx.createLinearGradient(0,0,200,0); grd.addColorStop(0,"red");
          grd.addColorStop(1,"white"); // Fill with gradient ctx.fillStyle =
          grd; ctx.fillRect(10,10,150,80);
        </script>
      </body>
    </html>
  )
}
