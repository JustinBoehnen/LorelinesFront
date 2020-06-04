/** @format */
//******************************************************************************
// src/loreline_interaction/NewLorelineDialog.js
// Contains the function that creats a popup when a user attempts
// to create a new loreline
//
import React from 'react'
import { Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle } from '@material-ui/core'

export default function NewTimelineEventDialog(props) {
	return (
		<Dialog open={props.isOpen} onClose={props.handleNewDialogClose} fullWidth>
			<DialogTitle>Create a new event:</DialogTitle>
			<DialogContent>
				<TextField
					autoFocus
					name="EventTitle"
					label="Title"
					margin="dense"
					autoComplete="off"
					value={props.eventTitle}
					onChange={props.onTitleChange}
					fullWidth
				/>
				<TextField
					autoFocus
					name="EventSubheader"
					label="Subheader"
					margin="dense"
					autoComplete="off"
					value={props.eventSubheader}
					onChange={props.onSubheaderChange}
					fullWidth
				/>
				<TextField
					autoFocus
					name="EventDesc"
					label="Description"
					margin="dense"
					autoComplete="off"
					value={props.eventDesc}
					onChange={props.onDescChange}
					fullWidth
				/>
			</DialogContent>
			<DialogActions>
				<Button onClick={async (e) => await props.onNewEventSubmit(e)} style={{ color: '#1ece6c' }} autoFocus>
					Create
				</Button>
				<Button onClick={props.handleNewDialogClose}>Cancel</Button>
			</DialogActions>
		</Dialog>
	)
}
