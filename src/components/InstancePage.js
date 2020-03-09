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
        instance: state.instance
    }
  }
  
  export default connect(mapStatetoProps)(InstancePage)