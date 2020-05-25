/** @format */
//******************************************************************************
// src/loreline_interaction/DeleteLorelineDialog.js
// Contains the function that creats a popup when a user attempts
// to delete a loreline
//
import React from "react";
import {
  Typography,
  Button,
  makeStyles,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  deletebutton: {
    color: "#ea4b35",
    "&:hover": {
      color: "#000",
      backgroundColor: "#ea4b35",
      fontWeight: "bolder",
    },
  },
}));

export default function DeleteLorelineDialog(props) {
  const classes = useStyles();

  return (
    <Dialog
      open={props.deleteDialogOpen}
      onClose={props.handleDeleteDialogClose}
    >
      <DialogTitle>Are you sure you want to delete:</DialogTitle>
      <DialogContent>
        <Typography
          variant="h4"
          style={{
            overflow: "hidden",
            textOverflow: "clip",
            marginTop: 16,
            marginBottom: 22,
            textAlign: "center",
            width: 400,
          }}
          color="primary"
        >
          {props.deleteLorelineName}
        </Typography>
        <DialogContentText
          style={{
            textAlign: "center",
            color: "#ea4b35",
          }}
        >
          This will permently delete this loreline, this is irreversible!
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          dataTestId="confirmDelete"
          onClick={(e) => {
            props.deleteLorelineFromDB(e, props.deleteLorelineId);
          }}
          className={classes.deletebutton}
          autoFocus
        >
          Delete
        </Button>
        <Button onClick={props.handleDeleteDialogClose}>Cancel</Button>
      </DialogActions>
    </Dialog>
  );
}
