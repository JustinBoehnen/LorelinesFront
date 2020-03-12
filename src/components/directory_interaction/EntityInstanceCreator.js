/** @format */

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { setLoading } from '../../actions/index'

import axios from 'axios'
import {
  List,
  ListItem,
  Grid,
  Button,
  Typography,
  TextField
} from '@material-ui/core'
import { Save } from '@material-ui/icons'
import InstanceTextField from '../instance_fields/InstanceTextField'
import InstanceCheckBoxField from '../instance_fields/InstanceCheckBoxField'
import InstanceNumberField from '../instance_fields/InstanceNumberField'
import InstanceHeader from '../instance_fields/InstanceHeader'
import InstanceRadioListField from '../instance_fields/InstanceRadioListField'
import InstanceDivider from '../instance_fields/InstanceDivider'

class CustomEntityCreator extends Component {
  constructor(props) {
    super(props)
    this.state = {
      entityName: '',
      instanceName: '',
      color: '',
      fields: [],
      anchorEl: null,
      validationFailed: false
    }
  }

  componentDidMount() {
    this.retreiveEntityFromDB()
  }

  addInstanceToDB = async entity => {
    this.props.setLoading(true)
    try {
      await axios
        .post(
          `https://lorelines-expressapi.herokuapp.com/api/lorelines/${this.props.lorelineId}/entities/${this.props.entityId}/instances`,
          {
            name: entity.name,
            content: entity.content
          }
        )
        .then(() => {
          this.props.updateList()
          this.props.setLoading(false)
        })
    } catch (err) {
      this.props.setLoading(false)
    }
  }

  handleInstanceNameChange = e => {
    this.setState({ instanceName: e.target.value })
  }

  retreiveEntityFromDB = async entity => {
    console.log(this.props.lorelineId, this.props.entityId)
    this.props.setLoading(true)
    try {
      const data = await axios.get(
        `https://lorelines-expressapi.herokuapp.com/api/lorelines/${this.props.lorelineId}/entities/${this.props.entityId}`
      )
      this.setState({
        fields: data.content
      })
      this.props.setLoading(false)
    } catch (err) {
      this.props.setLoading(false)
    }
  }

  render() {
    return (
      <Grid
        style={{ textAlign: 'center', marginTop: 20 }}
        container
        direction='column'
        justify='center'
        alignItems='center'
        spacing={2}
      >
        <Grid item>
          <Typography variant='overline'>new instance of:</Typography>
        </Grid>
        <Grid item>
          <Typography
            variant='h4'
            style={{
              color: this.state.color ?? '#ea4b35',
              textTransform: 'uppercase'
            }}
          >
            {this.state.entityName ?? 'undefined'}
          </Typography>
        </Grid>
        <Grid item>
          <TextField
            error={this.state.validationFailed && this.state.entityName === ''}
            helperText={
              this.state.validationFailed && this.state.entityName === ''
                ? 'this field cannot be empty'
                : ''
            }
            label='Custom Entity Name'
            value={this.state.instanceName}
            onChange={this.handleInstanceNameChange}
            inputProps={{ style: { color: this.state.color } }}
          />
        </Grid>
        <Grid item>
          <List>
            {this.state.fields.map((field, i) => {
              if (field.type === 'TEXT_FIELD')
                return (
                  <ListItem key={field + i}>
                    <InstanceTextField index={i} label={field.name} />
                  </ListItem>
                )
              else if (field.type === 'NUMBER_FIELD')
                return (
                  <ListItem key={field + i}>
                    <InstanceNumberField index={i} label={field.name} />
                  </ListItem>
                )
              else if (field.type === 'CHECKBOX_FIELD')
                return (
                  <ListItem key={field + i}>
                    <InstanceCheckBoxField index={i} label={field.name} />
                  </ListItem>
                )
              else if (field.type === 'RADIOLIST_FIELD')
                return (
                  <ListItem key={field + i}>
                    <InstanceRadioListField
                      index={i}
                      label={field.name}
                      options={field.content}
                    />
                  </ListItem>
                )
              else if (field.type === 'SECTION_DIVIDER')
                return (
                  <ListItem key={field + i}>
                    <InstanceDivider />
                  </ListItem>
                )
              else if (field.type === 'SECTION_HEADER')
                return (
                  <ListItem key={field + i}>
                    <InstanceHeader index={i} label={field.name} />
                  </ListItem>
                )
              return
            })}
          </List>
        </Grid>
        <Grid item>
          <Button
            startIcon={<Save />}
            variant='contained'
            color='primary'
            style={{ width: 150 }}
            onClick={this.handleCreateEntity}
          >
            Create
          </Button>
        </Grid>
      </Grid>
    )
  }
}

function mapStatetoProps(state) {
  return {
    lorelineId: state.lorelineId,
    entityId: state.entityId
  }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      setLoading: setLoading
    },
    dispatch
  )
}

export default connect(
  mapStatetoProps,
  matchDispatchToProps
)(CustomEntityCreator)
