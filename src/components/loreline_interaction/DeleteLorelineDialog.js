/** @format */

import React from 'react'
import {
  Typography,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from '@material-ui/core'

export default function DeleteLorelineDialog(props) {
  return (
    <Dialog
      open={props.deleteDialogOpen}
      onClose={props.handleDeleteDialogClose}
    >
      <DialogTitle>
        <Typography variant="h5">Are you sure you want to delete:</Typography>
        <Typography
          variant="h4"
          style={{
            overflow: 'hidden',
            textOverflow: 'clip',
            marginTop: 16,
            textAlign: 'center',
            width: 400
          }}
          color="primary"
        >
          {props.deleteLorelineName}
        </Typography>
      </DialogTitle>
      <DialogContent>
        <DialogContentText
          style={{
            textAlign: 'center',
            color: '#ea4b35'
          }}
        >
          This will permently delete this loreline, this is irreversible!
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={e => {
            props.deleteLorelineFromDB(e, props.deleteLorelineId)
          }}
          style={{
            color: '#ea4b35'
          }}
          autoFocus
        >
          Delete
        </Button>
        <Button onClick={props.handleDeleteDialogClose}>Cancel</Button>
      </DialogActions>
    </Dialog>
  )
}
