/** @format */

import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { setLoading } from "../../actions/index";
import axios from "axios";
import {
  List,
  ListItem,
  Grid,
  Button,
  TextField,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
  Snackbar,
  IconButton,
} from "@material-ui/core";
import { Add, Save, Close } from "@material-ui/icons";
import EntityField from "../custom_entity_fields/EntityField";
import SectionDivider from "../custom_entity_fields/SectionDivider.js";
import RadioListEntityField from "../custom_entity_fields/RadioListEntityField";
import { BlockPicker } from "react-color";

class CustomEntityCreator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      color: "#f78d1e",
      fields: [],
      anchorEl: null,
      validationFailed: false,
      creationFeedbackOpen: false,
    };
  }

  handleFeedbackClose = (event, reason) => {
    if (reason !== "clickaway") {
      this.setState({ creationFeedbackOpen: false });
    }
  };

  addEntityToDB = async (entity) => {
    this.props.setLoading(true);
    try {
      await axios
        .post(
          `https://lorelines-expressapi.herokuapp.com/api/lorelines/${this.props.lorelineId}/entities`,
          {
            name: entity.name,
            color: entity.color,
            content: entity.content,
          }
        )
        .then(() => {
          this.props.setLoading(false);
          this.setState({ creationFeedbackOpen: true });
          this.props.addEntityToList(entity);
        });
    } catch (err) {
      this.props.setLoading(false);
    }
  };

  handleAddItem = (commonName, actualName) => {
    this.setState({
      fields: [
        ...this.state.fields,
        { commonName: commonName, actualName: actualName, label: "" },
      ],
    });
    this.handleMenuClose();
  };

  handleRemoveItem = (index) => {
    const array = [...this.state.fields];
    array.splice(index, 1);
    this.setState({ fields: array });
  };

  handleMenuClick = (event) => {
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

  handleNameChange = (e) => this.setState({ name: e.target.value });

  handleColorChange = (color) => this.setState({ color: color.hex });

  handleSetRadioOptions = (index, options) => {
    const data = this.state.fields;
    data[index].options = options;

    this.setState({ fields: data });
  };

  handleCreateEntity = () => {
    var error = false;

    if (this.state.name === "" || this.state.fields.length === 0) error = true;
    else {
      var content = [];

      this.state.fields.forEach((field, i) => {
        if (field.actualName === "SECTION_DIVIDER") field.label = "divider";
        if (field.label === "") error = true;

        content = content.concat({ type: field.actualName, name: field.label });

        if (field.actualName === "RADIOLIST_FIELD") {
          content[i].content = [];

          for (const option of field.options) {
            if (option.label === "") error = true;

            content[i].content = content[i].content.concat({
              name: option.label,
            });
          }
        }
      });
    }

    this.setState({ validationFailed: error });

    const entity = {
      name: this.state.name,
      color: this.state.color,
      content: content,
    };

    if (!error) this.addEntityToDB(entity);
  };

  errorMessage = () => {
    return (
      <div>
        <Typography>all fields must have a label</Typography>
        {this.state.name === "" && (
          <Typography>custom entity must be named</Typography>
        )}
        {this.state.fields.length === 0 && (
          <Typography>custom entity must have at least one field</Typography>
        )}
      </div>
    );
  };

  render() {
    return (
      <Grid
        style={{ textAlign: "center", marginTop: 20 }}
        container
        direction="column"
        justify="center"
        alignItems="center"
        spacing={2}
      >
        <Grid item>
          <TextField
            error={this.state.validationFailed && this.state.name === ""}
            helperText={
              this.state.validationFailed && this.state.name === ""
                ? "this field cannot be empty"
                : ""
            }
            label="Custom Entity Name"
            value={this.state.name}
            onChange={this.handleNameChange}
            inputProps={{
              dataTestId: "entityName",
              style: { color: this.state.color },
            }}
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
              if (field.actualName === "SECTION_DIVIDER")
                return (
                  <ListItem key={field + i}>
                    <SectionDivider
                      index={i}
                      remove={this.handleRemoveItem}
                      label={field.label}
                    />
                  </ListItem>
                );
              else if (field.actualName === "RADIOLIST_FIELD")
                return (
                  <ListItem key={field + i}>
                    <RadioListEntityField
                      index={i}
                      options={field.options ?? [{ label: "" }]}
                      remove={this.handleRemoveItem}
                      changeLabel={this.handleFieldLabelChange}
                      label={field.label}
                      setOptions={this.handleSetRadioOptions}
                      validationFailed={this.state.validationFailed}
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
                      validationFailed={this.state.validationFailed}
                    />
                  </ListItem>
                );
            })}
          </List>
        </Grid>
        {this.state.validationFailed && (
          <Grid item>
            <Typography
              style={{
                padding: 5,
                fontSize: 16,
              }}
              color="error"
            >
              {this.errorMessage()}
            </Typography>
          </Grid>
        )}
        <Grid item>
          <Button
            startIcon={<Add />}
            variant="contained"
            color="primary"
            style={{ width: 150 }}
            onClick={this.handleMenuClick}
            dataTestId="addFieldButton"
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
            <MenuItem
              dataTestId="textField"
              onClick={() => this.handleAddItem("text", "TEXT_FIELD")}
            >
              Text
            </MenuItem>
            <MenuItem
              onClick={() => this.handleAddItem("number", "NUMBER_FIELD")}
            >
              Number
            </MenuItem>
            <Tooltip
              title="A list of references to other instances"
              placement="right"
            >
              <MenuItem
                onClick={() => this.handleAddItem("list", "LIST_FIELD")}
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
                  this.handleAddItem("reference", "REFERENCE_FIELD")
                }
              >
                Reference
              </MenuItem>
            </Tooltip>
            <MenuItem
              onClick={() => this.handleAddItem("checkbox", "CHECKBOX_FIELD")}
            >
              Checkbox
            </MenuItem>
            <Tooltip
              title="A list of options in which only one can be true"
              placement="right"
            >
              <MenuItem
                onClick={() =>
                  this.handleAddItem("radiolist", "RADIOLIST_FIELD")
                }
              >
                Radio List
              </MenuItem>
            </Tooltip>
            <MenuItem
              onClick={() => this.handleAddItem("image", "IMAGE_FIELD")}
            >
              Image
            </MenuItem>
            <Tooltip title="A bold header for organization" placement="right">
              <MenuItem
                onClick={() => this.handleAddItem("header", "SECTION_HEADER")}
              >
                Header
              </MenuItem>
            </Tooltip>
            <Tooltip
              title="A vertical line to break up your sections"
              placement="right"
            >
              <MenuItem
                onClick={() => this.handleAddItem("divider", "SECTION_DIVIDER")}
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
            dataTestId="confirmCreateEntity"
          >
            Create
          </Button>
        </Grid>
        <Snackbar
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          open={this.state.creationFeedbackOpen}
          autoHideDuration={6000}
          onClose={this.handleFeedbackClose}
          message="Custom Entity Added"
          action={
            <React.Fragment>
              <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={this.handleFeedbackClose}
              >
                <Close fontSize="small" />
              </IconButton>
            </React.Fragment>
          }
        />
      </Grid>
    );
  }
}

function mapStatetoProps(state) {
  return {
    lorelineId: state.lorelineId,
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      setLoading: setLoading,
    },
    dispatch
  );
}

export default connect(
  mapStatetoProps,
  matchDispatchToProps
)(CustomEntityCreator);
