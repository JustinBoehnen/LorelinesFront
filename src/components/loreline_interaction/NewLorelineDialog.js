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
	Tooltip,
} from '@material-ui/core'
import CloudUploadIcon from '@material-ui/icons/CloudUpload'

export default function NewLorelineDialog(props) {
	const handleFileChange = files => {
		const sizeInMB = 2
		var failed = false

		if (files[0].type !== 'image/png' && files[0].type !== 'image/jpg' && files[0].type !== 'image/jpeg') {
			alert(files[0].name + ' is not an accepted image format! Accepted formats are:\n.png .jpg .jpeg')
			failed = true
		}

		if (files[0].size > 1048576 * sizeInMB) {
			alert(
				'File size exceeds ' +
					sizeInMB +
					'MB limit! File uploaded was: ' +
					(files[0].size / 1048576).toFixed(2) +
					'MB'
			)
			failed = true
		}

		if (!failed) props.setNewLorelineImage(files[0])
	}

	return (
		<Dialog open={props.isOpen} onClose={props.handleNewDialogClose} fullWidth>
			<DialogTitle>Create a new loreline:</DialogTitle>
			<DialogContent>
				<TextField
					error={props.submitAttempted && props.lorelineName === ''}
					helperText={props.submitAttempted && props.lorelineName === '' ? 'This field cannot be empty!' : ''}
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
					<Button component="label" startIcon={<CloudUploadIcon />}>
						Upload Image
						<input
							type="file"
							accept=".jpg, .jpeg, .png"
							onChange={e => handleFileChange(e.target.files)}
							style={{ display: 'none' }}
						/>
					</Button>
					<Typography align="center">
						{props.newLorelineImage !== null ? props.newLorelineImage.name : ''}
					</Typography>
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
				<Button onClick={async e => await props.onNewLorelineSubmit(e)} style={{ color: '#1ece6c' }} autoFocus>
					Create
				</Button>
				<Button onClick={props.handleNewDialogClose}>Cancel</Button>
			</DialogActions>
		</Dialog>
	)
}
