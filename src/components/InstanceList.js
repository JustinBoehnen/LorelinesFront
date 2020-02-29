/** @format */

import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import {
  List,
  ListItem,
  ListItemText,
  Collapse,
  Typography
} from '@material-ui/core'
import { ExpandLess, ExpandMore } from '@material-ui/icons'

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
          const open = this.state[entity.id] || false
          return (
            <div key={entity.id}>
              <ListItem button onClick={this.handleClick(entity.id)}>
                <ListItemText primary={entity.name} />
                {open ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
              <Collapse in={open} timeout='auto' unmountOnExit>
                <List component='div' disablePadding>
                  {entity.instances.map(instance => {
                    return (
                      <ListItem key={instance.id} button>
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
    entities: state.entities,
    lorelineId: state.lorelineId
  }
}

export default connect(mapStatetoProps)(InstanceList)
