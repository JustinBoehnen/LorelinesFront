/** @format */
//******************************************************************************
// src/directory_interaction/DirectoryList.js
// Contains the class component to show the directory list
//
//
import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import axios from "axios";
import {
  List,
  ListItem,
  Button,
  Collapse,
  Typography,
  ButtonGroup,
  Divider,
  Popover,
  Grid,
} from "@material-ui/core";
import { ExpandLess, ExpandMore, AddCircle, Delete } from "@material-ui/icons";
import {
  setInstanceId,
  setEntityId,
  setInstance,
  setLoading,
} from "../../actions/index";
import { equal } from "assert";

class DirectoryList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: {},
      anchorEl: null,
      deleteEntityId: null,
      deleteEntityName: null,
      deleteInstanceId: null,
      deleteInstanceName: null,
      deleteEntityConfirmation: false,
      deleteInstanceConfirmation: false,
    };
  }

  componentDidMount() {
    this.props.updateDirectoryList();
  }

  handleInstanceSelect = (instanceId, entityId) => {
    this.props.setInstanceId(instanceId);
    this.props.setInstance(this.props.lorelineId, entityId, instanceId);
    this.props.setMode(this.props.modes.INSTANCE_VIEWER);
  };

  handleEntityDropdown = (key) => {
    this.setState({ [key]: !this.state[key] });
  };

  handleEntityDelete = (event, id, name) => {
    this.setState({
      anchorEl: event.currentTarget,
      deleteEntityId: id,
      deleteEntityName: name,
      deleteEntityConfirmation: true,
    });
  };

  handleEntityDeleteCancel = () => {
    this.setState({
      anchorEl: null,
      deleteEntityId: null,
      deleteEntityName: null,
      deleteEntityConfirmation: false,
    });
  };

  handleInstanceDelete = (event, entityId, instanceId, name) => {
    this.setState({
      anchorEl: event.currentTarget,
      deleteEntityId: entityId,
      deleteInstanceId: instanceId,
      deleteInstanceName: name,
      deleteInstanceConfirmation: true,
    });
  };

  handleInstanceDeleteCancel = () => {
    this.setState({
      anchorEl: null,
      deleteEntityId: null,
      deleteInstanceId: null,
      deleteInstanceName: null,
      deleteInstanceConfirmation: false,
    });
  };

  deleteEntityFromDB = async (e) => {
    e.preventDefault();
    this.props.setLoading(true);
    try {
      await axios
        .delete(
          `https://lorelines-expressapi.herokuapp.com/api/lorelines/${this.props.lorelineId}/entities/${this.state.deleteEntityId}`
        )
        .then(() => {
          console.log(this.state.deleteEntityId + " deleted!");
          this.handleEntityDeleteCancel();
          this.props.setLoading(false);
          this.props.updateDirectoryList();
        });
    } catch (err) {
      this.props.setLoading(false);
    }
  };

  deleteInstanceFromDB = async (e) => {
    e.preventDefault();
    this.props.setLoading(true);
    try {
      await axios
        .delete(
          `https://lorelines-expressapi.herokuapp.com/api/lorelines/${this.props.lorelineId}/entities/${this.state.deleteEntityId}/instances/${this.state.deleteInstanceId}`
        )
        .then(() => {
          console.log(this.state.deleteInstanceId + " deleted!");
          this.handleInstanceDeleteCancel();
          this.props.setLoading(false);
          this.props.updateDirectoryList();
        });
    } catch (err) {
      this.props.setLoading(false);
    }
  };

  handleEntityInstantiation = (id) => {
    this.props.setEntityId(id);
    this.props.setMode(this.props.modes.INSTANCE_CREATION);
  };

  render() {
    return (
      <Grid>
        <List style={{ width: 300, marginBottom: 76 }}>
          {Array.from(this.props.directory).map((entity) => {
            const open = this.state[entity._id] || false;
            return (
              <div
                style={{
                  borderStyle: "solid",
                  borderWidth: "1px 1px 1px 3px", //t r b l
                  borderColor: entity.color,
                  marginBottom: 5,
                  borderRadius: 5,
                }}
                key={entity._id}
              >
                <ListItem style={{ width: "100%", padding: 0 }}>
                  <ButtonGroup
                    fullWidth
                    variant="text"
                    aria-label="text primary button group"
                  >
                    <Button
                      style={{ width: 44, borderRadius: 0, color: "#777" }}
                      onClick={() => this.handleEntityInstantiation(entity._id)}
                    >
                      <AddCircle />
                    </Button>
                    <Button
                      style={{ borderRadius: 0 }}
                      onClick={() => this.handleEntityDropdown(entity._id)}
                    >
                      <Typography
                        style={{
                          textAlign: "left",
                          overflow: "hidden",
                          textOverflow: "clip",
                          width: 272,
                          textTransform: "none",
                          color: entity.color,
                        }}
                        variant="h6"
                      >
                        {entity.name}
                      </Typography>
                      {open ? <ExpandLess /> : <ExpandMore />}
                    </Button>
                    <Button
                      style={{
                        width: 44,
                        borderRadius: 0,
                        color: "#777",
                      }}
                      onClick={(event) =>
                        this.handleEntityDelete(event, entity._id, entity.name)
                      }
                    >
                      <Delete />
                    </Button>
                  </ButtonGroup>
                </ListItem>
                <Collapse in={open} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    {entity.instances.map((instance, i) => {
                      return (
                        <div key={instance._id + i}>
                          <Divider />
                          <ListItem style={{ width: "100%", padding: 0 }}>
                            <ButtonGroup
                              fullWidth
                              variant="text"
                              aria-label="text primary button group"
                            >
                              <Button
                                style={{ borderRadius: 0 }}
                                onClick={() =>
                                  this.handleInstanceSelect(
                                    instance._id,
                                    entity._id
                                  )
                                }
                              >
                                <Typography
                                  style={{
                                    textAlign: "left",
                                    overflow: "hidden",
                                    textOverflow: "clip",
                                    width: 272,
                                    textTransform: "none",
                                    color: entity.color,
                                  }}
                                  variant="h6"
                                >
                                  {instance.name}
                                </Typography>
                              </Button>
                              <Button
                                style={{
                                  width: 44,
                                  borderRadius: 0,
                                  color: "#777",
                                }}
                                onClick={(event) =>
                                  this.handleInstanceDelete(
                                    event,
                                    entity._id,
                                    instance._id,
                                    instance.name
                                  )
                                }
                              >
                                <Delete />
                              </Button>
                            </ButtonGroup>
                          </ListItem>
                        </div>
                      );
                    })}
                  </List>
                </Collapse>
              </div>
            );
          })}
        </List>
        <Popover
          anchorEl={this.state.anchorEl}
          open={this.state.deleteEntityConfirmation}
          id={Boolean(this.state.anchorEl) ? "simple-popover" : undefined}
          onClose={this.handleEntityDeleteCancel}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
        >
          <Grid
            container
            spacing={0}
            align="center"
            justify="center"
            direction="column"
          >
            <Grid item>
              <Typography variant="h6">
                Are you sure you want to delete {this.state.deleteEntityName}?
              </Typography>
            </Grid>
            <Grid item>
              <ButtonGroup>
                <Button color="inherit" onClick={this.deleteEntityFromDB}>
                  Delete
                </Button>
                <Button color="primary" onClick={this.handleEntityDeleteCancel}>
                  Cancel
                </Button>
              </ButtonGroup>
            </Grid>
          </Grid>
        </Popover>
        <Popover
          anchorEl={this.state.anchorEl}
          open={this.state.deleteInstanceConfirmation}
          id={Boolean(this.state.anchorEl) ? "simple-popover" : undefined}
          onClose={this.handleInstanceDeleteCancel}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
        >
          <Grid
            container
            spacing={0}
            align="center"
            justify="center"
            direction="column"
          >
            <Grid item>
              <Typography variant="h6">
                Are you sure you want to delete {this.state.deleteInstanceName}?
              </Typography>
            </Grid>
            <Grid item>
              <ButtonGroup>
                <Button color="inherit" onClick={this.deleteInstanceFromDB}>
                  Delete
                </Button>
                <Button
                  color="primary"
                  onClick={this.handleInstanceDeleteCancel}
                >
                  Cancel
                </Button>
              </ButtonGroup>
            </Grid>
          </Grid>
        </Popover>
      </Grid>
    );
  }
}

function mapStatetoProps(state) {
  return {
    lorelineId: state.lorelineId,
    directory: state.directory,
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      setInstanceId: setInstanceId,
      setEntityId: setEntityId,
      setInstance: setInstance,
      setLoading: setLoading,
    },
    dispatch
  );
}

export default connect(mapStatetoProps, matchDispatchToProps)(DirectoryList);
