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
    this.state = { open: {} };
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
    });
  };

  handleEntityDeleteCancel = () => {
    this.setState({
      anchorEl: null,
      deleteEntityId: null,
      deleteEntityName: null,
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
          this.props.updateList();
        });
    } catch (err) {}
  };

  handleEntityInstantiation = (id) => {
    this.props.setEntityId(id);
    this.props.setMode(this.props.modes.INSTANCE_CREATION);
  };

  render() {
    return (
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
                    onClick={() =>
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
                        <ListItem
                          button
                          onClick={() => {
                            this.handleInstanceSelect(instance._id, entity._id);
                          }}
                        >
                          <Typography>{instance.name}</Typography>
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
