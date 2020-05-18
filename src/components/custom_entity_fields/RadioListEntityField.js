/** @format */
//******************************************************************************
// src/custom_entity_fields/RadioListEntityField.js
// Contains Radio List Entity Field function, for use w/ the directory
//
//
import React, { useState } from 'react';
import {
  makeStyles,
  Grid,
  Typography,
  Card,
  InputBase,
  IconButton,
  Tooltip,
  List,
  ListItem,
  Button
} from '@material-ui/core';
import { Delete, Add } from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
  root: {
    flex: 1
  },
  card: {
    minWidth: 300,
    padding: 10
  },
  input: {
    flex: 1
  },
  delete: {
    marginLeft: 'auto'
  },
  content: {
    flex: 1
  }
}));

export default function EntityField(props) {
  const [options, setOptions] = useState(props.options);

  const classes = useStyles();

  const handleLabelChange = e => {
    props.changeLabel(props.index, e.target.value);
  };

  const updateOptions = op => {
    setOptions(op);
    props.setOptions(props.index, options);
  };

  const handleAddOption = () => {
    const newBoxes = options.concat({ label: '' });
    updateOptions(newBoxes);
  };

  const handleRemoveOption = index => {
    const array = [...options];

    if (array.length > 1) {
      array.splice(index, 1);

      updateOptions(array);
    }
  };

  const handleOptionLabelChange = (index, label) => {
    const data = [...options];
    data[index].label = label;

    updateOptions(data);
  };

  const optionsNeedLabels = () => {
    for (const option of options) {
      if (option.label === '') return true;
    }
    return false;
  };

  if (props.validationFailed && (props.label === '' || optionsNeedLabels()))
    var errorStyle = {
      style: { border: '2px solid red' }
    };

  return (
    <main className={classes.root}>
      <Tooltip title="The first option will be the default">
        <Card className={classes.card} {...errorStyle}>
          <Grid container direction="column">
            <Grid xs item container direction="row">
              <Grid xs item>
                <InputBase
                  className={classes.input}
                  placeholder="Label"
                  onChange={handleLabelChange}
                  value={props.label}
                />
              </Grid>
              <Grid item>
                <Typography variant="overline">radio list</Typography>
              </Grid>
            </Grid>
            <Grid item>
              <List>
                {options.map((option, i) => {
                  return (
                    <ListItem key={option + i}>
                      <Option
                        index={i}
                        removeOption={handleRemoveOption}
                        changeLabel={handleOptionLabelChange}
                        label={option.label}
                      />
                    </ListItem>
                  );
                })}
                <Button
                  startIcon={<Add />}
                  variant="contained"
                  color="secondary"
                  onClick={handleAddOption}
                >
                  Add Option
                </Button>
              </List>
            </Grid>
            <Grid item>
              <Tooltip title="Delete radio list">
                <IconButton
                  aria-label="delete"
                  className={classes.delete}
                  onClick={() => props.remove(props.index)}
                >
                  <Delete />
                </IconButton>
              </Tooltip>
            </Grid>
          </Grid>
        </Card>
      </Tooltip>
    </main>
  );
}

function Option(props) {
  const classes = useStyles();

  const handleLabelChange = e => {
    props.changeLabel(props.index, e.target.value);
  };

  return (
    <Grid container direction="row">
      <Grid xs item>
        <InputBase
          className={classes.input}
          placeholder="Option Name"
          onChange={handleLabelChange}
          value={props.label}
        />
      </Grid>
      <Grid item>
        <Tooltip title="Delete option" placement="right">
          <IconButton
            size="small"
            onClick={() => props.removeOption(props.index)}
          >
            <Delete />
          </IconButton>
        </Tooltip>
      </Grid>
    </Grid>
  );
}
