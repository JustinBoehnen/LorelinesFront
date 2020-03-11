/** @format */

import React from 'react'
import {
  Typography,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Tooltip
} from '@material-ui/core'

export default function NewLorelineDialog(props) {
  const handleFileChange = files => {
    const sizeInMB = 2

    if (
      files[0].type !== 'image/png' &&
      files[0].type !== 'image/jpg' &&
      files[0].type !== 'image/jpeg'
    )
      alert(
        files[0].name +
          ' is not an accepted image format! Accepted formats are:\n.png .jpg .jpeg'
      )

    if (files[0].size > 1048576 * sizeInMB)
      alert(
        'File size exceeds ' +
          sizeInMB +
          'MB limit! File uploaded was: ' +
          (files[0].size / 1048576).toFixed(2) +
          'MB'
      )
  }

  return (
    <Dialog open={props.isOpen} onClose={props.handleNewDialogClose} fullWidth>
      <DialogTitle>
        <Typography variant="h5">Create a new loreline:</Typography>
      </DialogTitle>
      <DialogContent>
        <TextField
          error={props.submitAttempted && props.lorelineName === ''}
          helperText={
            props.submitAttempted && props.lorelineName === ''
              ? 'This field cannot be empty!'
              : ''
          }
          autoFocus
          name="LorelineName"
          label="Loreline Name"
          margin="dense"
          autoComplete="off"
          value={props.lorelineName}
          onChange={props.onLorelineNameChange}
          fullWidth
        />
        <FormGroup>
          <Button component="label">
            Upload Image
            <input
              type="file"
              multiple="false"
              accept=".jpg, .jpeg, .png"
              onChange={e => handleFileChange(e.target.files)}
              style={{ display: 'none' }}
            />
          </Button>
          <Tooltip
            arrow
            placement="left"
            title="Toggles whether you would like pre-defined entites in your loreline (recommended for beginners)"
          >
            <FormControlLabel
              control={
                <Checkbox
                  checked={props.usingStaticEnities}
                  onChange={props.toggleUsingStaticEntities}
                  color="primary"
                />
              }
              label="Import standard assets"
            />
          </Tooltip>
        </FormGroup>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={async e => await props.onNewLorelineSubmit(e)}
          style={{ color: '#1ece6c' }}
          autoFocus
        >
          Create
        </Button>
        <Button onClick={props.handleNewDialogClose}>Cancel</Button>
      </DialogActions>
    </Dialog>
  )
}
