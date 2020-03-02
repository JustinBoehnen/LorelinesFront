/** @format */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import {
  List,
  ListItem,
  Grid,
  Button,
  TextField,
  Menu,
  MenuItem,
  Tooltip
} from '@material-ui/core';
import { Add, Save } from '@material-ui/icons';

import EntityField from './custom_entity_fields/EntityField';
import SectionDivider from './custom_entity_fields/SectionDivider.js';
import RadioListEntityField from './custom_entity_fields/RadioListEntityField';
import { BlockPicker } from 'react-color';

class CustomEntityCreator extends Component {
  constructor(props) {
    super(props);
    this.state = { name: '', color: '#f78d1e', fields: [], anchorEl: null };
  }

  test_AddEntityToDB = async entity => {
    console.log('name: ', entity.name);
    console.log('color: ', entity.color);
    console.log('content: ', entity.content);
    try {
      const { data } = await axios.post(
        'http://localhost:8080/api/lorelines/5e59acba0252cc001721c058/entities',
        {
          name: entity.name,
          color: entity.color,
          content: entity.content
        }
      );
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  handleAddItem = (commonName, actualName) => {
    this.setState({
      fields: [
        ...this.state.fields,
        { commonName: commonName, actualName: actualName, label: '' }
      ]
    });
    this.handleMenuClose();
  };

  handleRemoveItem = index => {
    const array = [...this.state.fields];
    array.splice(index, 1);
    this.setState({ fields: array });
  };

  handleMenuClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleFieldLabelChange = (index, label) => {
    const data = this.state.fields;
    data[index].label = label;

    this.setState({ fields: data });
  };

  handleMenuClose = () => {
    this.setState({ anchorEl: null });
  };

  handleNameChange = e => this.setState({ name: e.target.value });

  handleColorChange = color => this.setState({ color: color.hex });

  handleSetRadioOptions = (index, options) => {
    const data = this.state.fields;
    data[index].options = options;

    this.setState({ fields: data });
  };

  handleCreateEntity = () => {
    var content = [];

    this.state.fields.map((field, i) => {
      content = content.concat({ type: field.actualName, name: field.label });
      if (field.actualName === 'RADIOLIST_FIELD') {
        console.log('field ', i, ' is a radio list');
        content[i].content = [];
        field.options.map(option => {
          console.log(
            'content: ',
            content,
            ' | index: ',
            i,
            ' | option: ',
            option
          );
          content[i].content = content[i].content.concat({
            name: option.label
          });
        });
      }
    });

    const entity = {
      name: this.state.name,
      color: this.state.color,
      content: content
    };

    console.log(entity);
    this.test_AddEntityToDB(entity);
  };

  render() {
    return (
      <Grid
        style={{ textAlign: 'center' }}
        container
        direction="column"
        justify="center"
        alignItems="center"
        spacing={2}
      >
        <Grid item>
          <TextField
            label="Custom Entity Name"
            value={this.state.name}
            onChange={this.handleNameChange}
            inputProps={{ style: { color: this.state.color } }}
          />
        </Grid>
        <Grid item>
          <Tooltip title="Select a color for your custom entity">
            <BlockPicker
              color={this.state.color}
              onChangeComplete={this.handleColorChange}
              width="300"
            />
          </Tooltip>
        </Grid>
        <Grid item>
          <List>
            {this.state.fields.map((field, i) => {
              if (field.actualName === 'SECTION_DIVIDER')
                return (
                  <ListItem key={field + i}>
                    <SectionDivider
                      index={i}
                      remove={this.handleRemoveItem}
                      label={field.label}
                    />
                  </ListItem>
                );
              else if (field.actualName === 'RADIOLIST_FIELD')
                return (
                  <ListItem key={field + i}>
                    <RadioListEntityField
                      index={i}
                      remove={this.handleRemoveItem}
                      changeLabel={this.handleFieldLabelChange}
                      label={field.label}
                      setOptions={this.handleSetRadioOptions}
                    />
                  </ListItem>
                );
              else
                return (
                  <ListItem key={field + i}>
                    <EntityField
                      index={i}
                      typeName={field.commonName}
                      remove={this.handleRemoveItem}
                      changeLabel={this.handleFieldLabelChange}
                      label={field.label}
                    />
                  </ListItem>
                );
            })}
          </List>
        </Grid>
        <Grid item>
          <Button
            startIcon={<Add />}
            variant="contained"
            color="primary"
            style={{ width: 150 }}
            onClick={this.handleMenuClick}
          >
            Add Field
          </Button>
          <Menu
            id="simple-menu"
            anchorEl={this.state.anchorEl}
            keepMounted
            open={Boolean(this.state.anchorEl)}
            onClose={this.handleMenuClose}
          >
            <MenuItem onClick={() => this.handleAddItem('text', 'TEXT_FIELD')}>
              Text
            </MenuItem>

            <Tooltip
              title="A list of references to other instances"
              placement="right"
            >
              <MenuItem
                onClick={() => this.handleAddItem('list', 'LIST_FIELD')}
              >
                List
              </MenuItem>
            </Tooltip>
            <Tooltip
              title="A single reference to another instance"
              placement="right"
            >
              <MenuItem
                onClick={() =>
                  this.handleAddItem('reference', 'REFERENCE_FIELD')
                }
              >
                Reference
              </MenuItem>
            </Tooltip>
            <MenuItem
              onClick={() => this.handleAddItem('checkbox', 'CHECKBOX_FIELD')}
            >
              Checkbox
            </MenuItem>
            <Tooltip
              title="A list of options in which only one can be true"
              placement="right"
            >
              <MenuItem
                onClick={() =>
                  this.handleAddItem('radiolist', 'RADIOLIST_FIELD')
                }
              >
                Radio List
              </MenuItem>
            </Tooltip>
            <MenuItem
              onClick={() => this.handleAddItem('image', 'IMAGE_FIELD')}
            >
              Image
            </MenuItem>
            <Tooltip title="A bold header for organization" placement="right">
              <MenuItem
                onClick={() => this.handleAddItem('header', 'SECTION_HEADER')}
              >
                Header
              </MenuItem>
            </Tooltip>
            <Tooltip
              title="A vertical line to break up your sections"
              placement="right"
            >
              <MenuItem
                onClick={() => this.handleAddItem('divider', 'SECTION_DIVIDER')}
              >
                Divider
              </MenuItem>
            </Tooltip>
          </Menu>
        </Grid>
        <Grid item>
          <Button
            startIcon={<Save />}
            variant="contained"
            color="primary"
            style={{ width: 150 }}
            onClick={this.handleCreateEntity}
          >
            Create
          </Button>
        </Grid>
      </Grid>
    );
  }
}

function mapStatetoProps(state) {
  return {
    entities: state.entities,
    lorelineId: state.lorelineId
  };
}

export default connect(mapStatetoProps)(CustomEntityCreator);
