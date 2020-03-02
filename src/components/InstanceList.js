/** @format */

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from "redux";
import axios from 'axios';
import {
  List,
  ListItem,
  ListItemText,
  Collapse,
  Typography
} from '@material-ui/core';
import { ExpandLess, ExpandMore } from '@material-ui/icons';
import { setInstance } from "../actions/index";

class InstanceList extends Component {
  state = { open: {}, entities: [] }

  componentDidMount() {
    axios
      .get(
        `https://lorelines-expressapi.herokuapp.com/api/lorelines/${this.props.lorelineId}/directory/`
      )
      .then(res => {
        const entities = res.data
        this.setState({ entities })
      })
  }

  handleClick = key => () => {
    this.setState({ [key]: !this.state[key] })
  }

  render() {
    return (
      <List>
        {this.state.entities.map(entity => {
          const open = this.state[entity._id] || false
          return (
            <div key={entity._id}>
              <ListItem button onClick={this.handleClick(entity._id)}>
                <ListItemText primary={entity.name} />
                {open ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
              <Collapse in={open} timeout='auto' unmountOnExit>
                <List component='div' disablePadding>
                  {entity.instances.map(instance => {
                    return (
                      <ListItem key={instance._id} button onClick={() => {
                        this.props.setInstance(instance._id);
                      }}>
                        <Typography>{instance.name}</Typography>
                      </ListItem>
                    )
                  })}
                </List>
              </Collapse>
            </div>
          )
        })}
      </List>
    )
  }
}

function mapStatetoProps(state) {
  return {
    //entities: state.entities,
    lorelineId: state.lorelineId
  }
}
function matchDispatchToProps(dispatch) {
  return bindActionCreators({ setInstance: setInstance }, dispatch);
}

export default connect(mapStatetoProps, matchDispatchToProps)(InstanceList)