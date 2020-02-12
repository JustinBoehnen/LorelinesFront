import React from 'react'
import {
  makeStyles,
  Grid,
  Typography,
  Drawer,
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

const drawerWidth = 120

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  toolbar: theme.mixins.toolbar,
}));

export default function Timeline() {
  const classes = useStyles();

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
          <Typography>Canvas and Drag/Drop Components in progress</Typography>
        </Grid>
      </Grid>
      <div>
        <Drawer
          className={classes.drawer}
          variant="permanent"
          anchor='right'

        >
          <div className={classes.toolbar}>
          </div>
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
              <ListItemText primary='Branching Node' />
            </ListItem>
            <ListItem button key='Tether'>
              <ListItemIcon>
                <CallMade color='secondary' />
              </ListItemIcon>
              <ListItemText primary='Tether' />
            </ListItem>
            <Divider />
            <ListItem button key='Warp Node'>
              <ListItemIcon>
                <FlightTakeoffOutlined color='secondary' />
              </ListItemIcon>
              <ListItemText primary='Warp Node' />
            </ListItem>
          </List>
        </Drawer>
      </div>
    </main>
  );
}