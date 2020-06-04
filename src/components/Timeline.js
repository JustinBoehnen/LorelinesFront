//******************************************************************************
// Timeline.js
// Timeline page function that will contain the timeline tool
// 
//
import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { setLoading, updateTimeline } from "../actions/index";
import {
  makeStyles,
  Grid,
  Typography,
  Drawer,
  List,
  Divider,
  ListItem,
  ListItemText,
  ListItemIcon,
  Avatar,
  Icon
} from "@material-ui/core";

import { Timeline as UITimeline} from 'react-material-timeline';

import FontDownloadIcon from "@material-ui/icons/FontDownloadOutlined";
import FormatListNumbered from "@material-ui/icons/FormatListNumberedOutlined";
import FlightTakeoffOutlined from "@material-ui/icons/FlightTakeoffOutlined";
import CallMade from "@material-ui/icons/CallMadeOutlined";

const drawerWidth = 120;

const events = [
  {
    title: 'Event 1',
    subheader: new Date().toDateString(),
    description: [ 'Some description for event 1' ],
    icon: <Avatar><Icon></Icon></Avatar>,
  },
  {
    title: 'Event 2',
    subheader: new Date().toDateString(),
    description: [ 'Some description for event 2' ],
    icon: <Avatar><Icon></Icon></Avatar>,
  }
];

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  },
  toolbar: theme.mixins.toolbar
}));

export default connect(
  mapStateToProps,
  matchDispatchToProps
)(function Timeline(props)  {
  const classes = useStyles();

  const getTimeline = async () => {
    if (props.lorelineId !== null) {
      props.setLoading(true);
      try {
        await axios
          .get(
            `https://lorelines-expressapi.herokuapp.com/api/lorelines/${props.lorelineId}/timeline/`
          )
          .then((res) => {
            console.log("NEW DATA: ", res.data);
            props.updateTimeline(res.data);
            props.setLoading(false);
          });
      } catch (err) {
        props.setLoading(false);
      }
    }
  };

  if(props.lorelineId && !props.timeline)
    getTimeline()

  if (!props.timeline) {
    return <p></p>
  }

  return (
    <main className={classes.root}>
      <Grid
        container
        style={{ height: "70vh", width: "60vw", textAlign: "center" }}
        direction="row"
        justify="center"
        alignItems="center"
        spacing={2}
      >
        <Grid item>
          {/* <Typography>Canvas and Drag/Drop Components in progress</Typography> */}
          <UITimeline 
          events={props.timeline.events}
          />
        </Grid>
      </Grid>
      <div>
        <Drawer className={classes.drawer} variant="permanent" anchor="right">
          <div className={classes.toolbar}></div>
          <List>
            <ListItem button key="Event Node">
              <ListItemIcon>
                <FontDownloadIcon color="secondary" />
              </ListItemIcon>
              <ListItemText primary="Event Node" />
            </ListItem>
            <ListItem button key="Branching Event Node">
              <ListItemIcon>
                <FormatListNumbered color="secondary" />
              </ListItemIcon>
              <ListItemText primary="Branching Node" />
            </ListItem>
            <ListItem button key="Tether">
              <ListItemIcon>
                <CallMade color="secondary" />
              </ListItemIcon>
              <ListItemText primary="Tether" />
            </ListItem>
            <Divider />
            <ListItem button key="Warp Node">
              <ListItemIcon>
                <FlightTakeoffOutlined color="secondary" />
              </ListItemIcon>
              <ListItemText primary="Warp Node" />
            </ListItem>
          </List>
        </Drawer>
      </div>
    </main>
  );
});

//******************************************************************************
// Redux Incoming Variables Function
function mapStateToProps(state) {
  return {
    lorelineId: state.lorelineId,
    timeline: state.timeline,
  };
}
//******************************************************************************
// Redux Outgoing Variables Function
function matchDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      setLoading: setLoading,
      updateTimeline: updateTimeline,
    },
    dispatch
  );
}