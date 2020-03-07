/**@format */

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

class InstancePage extends Component {
    state = { open: {}, instance: [] }

    componentDidMount() {
        // axios
        //   .get(
        //     `https://lorelines-expressapi.herokuapp.com/api/lorelines/${this.props.lorelineId}/entities/${this.props.entityId}/instances/${this.props.instanceId}`
        //   )
        //   .then(res => {
        //     const instance = res.data
        //     this.setState({ instance })
        //   })
      }

    render() {
        return (
            <List>
                <Typography>{this.props.instanceId}</Typography>
            </List>
        )
    }
}

function mapStatetoProps(state) {
    return {
        lorelineId: state.lorelineId,
        entityId: state.entityId,
        instanceId: state.instanceId
    }
  }
  
  export default connect(mapStatetoProps)(InstancePage)