/** @format */

import React from 'react';
import {
  Grid,
  List,
  makeStyles,
  Drawer
} from '@material-ui/core';
import InstanceList from './InstanceList';
import InstancePage from './InstancePage';

const drawerWidth = 120

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
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

export default function Directory(props) {
  const classes = useStyles();

  return (
      <main className={classes.root}>
        <div>
          <List
            container
            //spacing={2}
            direction="row"
            justify="flex-start"
            alignItems="center">
              <InstancePage />
          </List>
          <Drawer
          className={classes.drawer}
          variant="permanent"
          anchor="right"
          >
            <div className={classes.toolbar}></div>
            <InstanceList />
          </Drawer>
        </div>
      </main>
  );
}
