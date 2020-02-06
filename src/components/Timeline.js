import React from 'react'
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
        bottom: false,
      });

const toggleDrawer = (bottom, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [bottom]: open });
};

const sideList = bottom => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(bottom, false)}
      onKeyDown={toggleDrawer(bottom, false)}
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
        direction='row'
        justify='center'
        alignItems='center'
        container
      >
        <Grid item>
          <Typography>Side menu in progress</Typography>
        </Grid>
      </Grid>
      
      <div>
        <Button onClick={toggleDrawer('bottom', true)}>Open Components</Button>
      <Drawer anchor="bottom" open={state.bottom} onClose={toggleDrawer('bottom', false)}>
        {sideList('bottom')}
      </Drawer>
    </div>
    </main>
  )
}