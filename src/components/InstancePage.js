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
        axios
            .get()
    }

    render() {
        return (
            <List>

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