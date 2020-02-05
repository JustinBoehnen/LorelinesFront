import React from 'react'
<<<<<<< HEAD
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
=======
import { makeStyles, 
    Grid, 
    Typography, 
    Drawer, 
    Button, 
    List, 
    Divider, 
    ListItem,
    ListItemText,
    ListItemIcon
} from '@material-ui/core'
 
import FontDownloadIcon from '@material-ui/icons/FontDownloadOutlined'
import FormatListNumbered from '@material-ui/icons/FormatListNumberedOutlined'
import FlightTakeoffOutlined from '@material-ui/icons/FlightTakeoffOutlined'
import CallMade from '@material-ui/icons/CallMadeOutlined'

const drawerWidthExpanded = 240
const drawerWidthCondensed = 58

const useStyles = makeStyles({
    list: {
      width: 250,
    },
    fullList: {
      width: 'auto',
    },
});
export default function Timeline() {
    const classes = useStyles();
    const [state, setState] = React.useState({
        right: false,
      });

const toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [side]: open });
};

const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List>
      <ListItem button key='Event Node'>
        <ListItemIcon>
            <FontDownloadIcon color='secondary' />
        </ListItemIcon>
            <ListItemText primary='Event Node' />
        </ListItem>
        <ListItem button key='Branching Event Node'>
        <ListItemIcon>
            <FormatListNumbered color='secondary' />
        </ListItemIcon>
            <ListItemText primary='Branching Event Node' />
        </ListItem>
        <ListItem button key='Teather'>
        <ListItemIcon>
            <CallMade color='secondary' />
        </ListItemIcon>
            <ListItemText primary='Teather' />
        </ListItem>
        <ListItem button key='Warp Node'>
        <ListItemIcon>
            <FlightTakeoffOutlined color='secondary' />
        </ListItemIcon>
            <ListItemText primary='Warp Node' />
        </ListItem>
      </List>
    </div>
);


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
          <Typography>Side menu in progress</Typography>
        </Grid>
      </Grid>
      
      <div>
        <Button onClick={toggleDrawer('right',true)}>Open Components</Button>
      <Drawer anchor="right" open={state.right} onClose={toggleDrawer('right', false)}>
        {sideList('right')}
      </Drawer>
    </div>
    </main>
  )
}
>>>>>>> 767306ffee3e31bfdbef478cbc37897e06541946
