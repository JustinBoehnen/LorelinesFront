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
        
      }

    render() {

        if(!this.props.instance) {
            return <p>Sorry! Theres no instance yet</p>;
        }

        return (
            <List>
              {this.props.instance.content.map(field => {
                return (
                  <div key={field.content}>
                    <ListItem button >
                      <ListItemText primary={field.content} 
                        secondary={field.name}/>
                    </ListItem>
                  </div>
                )
              })}
            </List>
        )
    }
}

function mapStatetoProps(state) {
    return {
        lorelineId: state.lorelineId,
        entityId: state.entityId,
        instanceId: state.instanceId,
        instance: state.instance
    }
  }
  
  export default connect(mapStatetoProps)(InstancePage)