/** @format */

import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
	makeStyles,
	Grid,
	Typography,
	Snackbar,
	IconButton,
	Card,
	CardHeader,
	CardActionArea,
	Fab,
	Divider,
	Tooltip,
	CardMedia,
	CardActions,
} from '@material-ui/core'
import axios from 'axios'
import { Delete, FileCopy, Add, Close as CloseIcon, BorderColor } from '@material-ui/icons'
import { setLoreline, setLoading, setLorelineArray } from '../actions/index'
import NewLorelineDialog from './loreline_interaction/NewLorelineDialog'
import DeleteLorelineDialog from './loreline_interaction/DeleteLorelineDialog'

const useStyles = makeStyles(theme => ({
	content: {
		flexGrow: 1,
	},
	link: {
		color: theme.palette.secondary.main,
		textDecoration: 'underline',
	},
	field: {
		width: '20vw',
		minWidth: '250px',
	},
	error: {
		color: theme.palette.error.main,
	},
	card: {
		textOverflow: 'ellipsis',
		width: 350,
		margin: 10,
		borderRadius: 5,
	},
	selectedCard: {
		textOverflow: 'ellipsis',
		width: 350,
		margin: 10,
		//outlineStyle: 'solid',
		//outlineColor: '#f78d1e',
		//outlineWidth: 4,
		boxShadow: '0 0 0 5px #f78d1e',
		borderRadius: 5,
		backgroundColor: '#666',
	},
	cardimage: {
		height: 140,
	},
	cardheader: {
		overflow: 'hidden',
		textOverflow: 'ellipsis',
		height: 35,
		width: 320,
	},
	deletebutton: {
		'&:hover': {
			color: '#ea4b35',
		},
	},
}))

export default connect(
	mapStateToProps,
	matchDispatchToProps
)(function Lorelines(props) {
	const classes = useStyles()
	const [deleteDialogOpen, setDeleteDialogOpen] = React.useState(false)
	const [usingStaticEnities, setUsingStaticEntities] = React.useState(true)
	const [newDialogOpen, setNewDialogOpen] = React.useState(false)
	const [deleteLorelineId, setDeleteLorelineId] = React.useState('')
	const [deleteLorelineName, setDeleteLorelineName] = React.useState('')
	const [creationFeedbackOpen, setCreationFeedbackOpen] = React.useState(false)
	const [lorelineName, setLorelineName] = useState('')
	const [newLorelineImage, setNewLorelineImage] = useState(null)
	const [submitAttempted, setSubmitAttempted] = useState(false)

	useEffect(() => {
		GetLorelines()
	}, [])

	const GetLorelines = async () => {
		props.setLoading(true) // LOADING START: GET LORELINES
		try {
			const response = await axios.get(
				`https://lorelines-expressapi.herokuapp.com/api/users/${props.user.id}/lorelines`
			)
			props.setLorelineArray(response.data)
			props.setLoading(false) // LOADING END: GET LORELINES
		} catch (err) {
			props.setLoading(false)
		}
	}

	const handleDeleteDialogOpen = (id, name) => {
		setDeleteLorelineId(id)
		setDeleteLorelineName(name)
		setDeleteDialogOpen(true)
	}

	const handleDeleteDialogClose = () => {
		setDeleteDialogOpen(false)
	}

	const handleNewDialogOpen = (id, name) => {
		setNewDialogOpen(true)
	}

	const handleNewDialogClose = (id, name) => {
		setNewDialogOpen(false)
		setLorelineName('')
		setNewLorelineImage(null)
		setUsingStaticEntities(true)
		setSubmitAttempted(false)
	}

	const toggleUsingStaticEntities = () => {
		setUsingStaticEntities(!usingStaticEnities)
	}

	const onLorelineNameChange = e => setLorelineName(e.target.value)

	const handleSelectLoreline = id => {
		props.setLoreline(id)
	}

	const handleFeedbackClose = (event, reason) => {
		if (reason !== 'clickaway') {
			setCreationFeedbackOpen(false)
		}
	}

	const createNewLoreline = async (name, file) => {
		var imagePath = ''

		if (file !== null) {
			const data = new FormData()
			data.append('image', file, file.name)

			try {
				await axios
					.post(`https://lorelines-expressapi.herokuapp.com/api/users/${props.user.id}/images`, data, {
						headers: {
							accept: 'application/json',
							'Accept-Language': 'en-US,en;q=0.8',
							'Content-Type': `multipart/form-data; boundary=${data._boundary}`,
						},
					})
					.then(res => {
						imagePath = res.data ?? ''
					})
			} catch (err) {}
		}

		//default image
		if (imagePath === '')
			imagePath = 'https://lorelines-image-library.s3-us-west-2.amazonaws.com/default_loreline_image.png'

		try {
			await axios
				.post(`https://lorelines-expressapi.herokuapp.com/api/users/${props.user.id}/lorelines`, {
					name: name,
					image: imagePath,
				})
				.then(res => {
					//const array = props.lorelineArray
					//const newElem = {
					//  _id: res.data,
					//  name: name,
					//  image: imagePath,
					//  modified: Date.now()
					//}
					//array.unshift(newElem)
					//props.setLorelineArray(array)
					GetLorelines()
					props.setLoading(false) // LOADING END: NEW LORELINE
					setCreationFeedbackOpen(true)
				})
		} catch (err) {}
		GetLorelines()
	}

	const deleteLorelineFromDB = async (e, id) => {
		e.preventDefault()
		if (props.loreline == id) props.setLoreline(null)
		props.setLoading(true) // LOADING START: DELETE LORELINE
		handleDeleteDialogClose()
		try {
			await axios
				.delete(`https://lorelines-expressapi.herokuapp.com/api/users/${props.user.id}/lorelines/${id}`)
				.then(() => {
					const array = [...props.lorelineArray]
					array.forEach(loreline => {
						if (loreline._id === id) array.splice(array.indexOf(loreline), 1)
					})
					props.setLorelineArray(array)
					//GetLorelines()
					props.setLoading(false) // LOADING END: DELETE LORELINE
				})
		} catch (err) {}
	}

	const onNewLorelineSubmit = async e => {
		e.preventDefault()
		setSubmitAttempted(true)
		if (lorelineName !== '') {
			props.setLoading(true) // LOADING START: NEW LORELINE
			setLorelineName('')
			setNewLorelineImage(null)
			setSubmitAttempted(false)
			handleNewDialogClose()
			createNewLoreline(lorelineName, newLorelineImage)
		} else {
			return false
		}
	}

	return (
		<main className={classes.root}>
			<div style={{ marginTop: 20 }}>
				{/************************************Button that opens add loreline dialog******************************/}
				<Fab
					style={{
						position: 'fixed',
						bottom: 20,
						right: 20,
						zIndex: 1900,
					}}
					variant="extended"
					size="large"
					color="primary"
					aria-label="add"
					className={classes.margin}
					onClick={() => handleNewDialogOpen()}
				>
					<Add />
					New Loreline
				</Fab>
				{/*********************** Popup menu for FAB ****************************************/}
				<NewLorelineDialog
					isOpen={newDialogOpen}
					handleNewDialogClose={handleNewDialogClose}
					submitAttempted={submitAttempted}
					lorelineName={lorelineName}
					onLorelineNameChange={onLorelineNameChange}
					usingStaticEnities={usingStaticEnities}
					toggleUsingStaticEntities={toggleUsingStaticEntities}
					onNewLorelineSubmit={onNewLorelineSubmit}
					setNewLorelineImage={setNewLorelineImage}
					newLorelineImage={newLorelineImage}
				/>
				{/*********************Small FeedBack to when a lorelines added*******************************/}
				<Snackbar
					anchorOrigin={{
						vertical: 'bottom',
						horizontal: 'left',
					}}
					open={creationFeedbackOpen}
					autoHideDuration={6000}
					onClose={handleFeedbackClose}
					message="Loreline Added"
					action={
						<React.Fragment>
							<IconButton size="small" aria-label="close" color="inherit" onClick={handleFeedbackClose}>
								<CloseIcon fontSize="small" />
							</IconButton>
						</React.Fragment>
					}
				/>

				{/***************************************Display of the main screen**********************/}
				<Typography style={{ marginLeft: 20, marginBottom: 20 }} variant="h4">
					Select a Loreline
				</Typography>
				<Divider />
				<div className={classes.root}>
					{/*************************************Dynamically adding cards to screen***************/}
					<Grid
						container
						style={{ marginTop: 15 }}
						direction="row"
						justify="space-around"
						alignItems="center"
					>
						{props.lorelineArray.map(loreline => (
							<Grid item key={props.lorelineArray.indexOf(loreline)}>
								<Card className={props.loreline === loreline._id ? classes.selectedCard : classes.card}>
									<Tooltip title="Select this loreline">
										<CardActionArea
											onClick={() => {
												handleSelectLoreline(loreline._id)
											}}
										>
											<CardMedia
												className={classes.cardimage}
												image={
													loreline.image ??
													'https://lorelines-image-library.s3-us-west-2.amazonaws.com/default_loreline_image.png'
												}
											/>
											<CardHeader
												title={
													<Typography variant="h5" className={classes.cardheader}>
														{loreline.name}
													</Typography>
												}
												subheader={`Last Modified: ${new Date(
													loreline.modified
												).toLocaleDateString()} at 
                        ${new Date(loreline.modified).toLocaleTimeString()}`}
											/>
										</CardActionArea>
									</Tooltip>
									<Divider />
									<CardActions>
										<Tooltip title="Delete">
											<IconButton
												onClick={() => handleDeleteDialogOpen(loreline._id, loreline.name)}
												className={classes.deletebutton}
											>
												<Delete />
											</IconButton>
										</Tooltip>
										<Tooltip title="Duplicate: It doesn't work yet. Might get rid of it, idk man. This stuff is difficult.">
											<IconButton>
												<FileCopy />
											</IconButton>
										</Tooltip>
									</CardActions>
									{/************************************Delete Loreline PopUp ********************************/}
									<DeleteLorelineDialog
										deleteDialogOpen={deleteDialogOpen}
										handleDeleteDialogClose={handleDeleteDialogClose}
										deleteLorelineName={deleteLorelineName}
										deleteLorelineId={deleteLorelineId}
										deleteLorelineFromDB={deleteLorelineFromDB}
									/>
								</Card>
							</Grid>
						))}
					</Grid>
				</div>
			</div>
		</main>
	)
})

function mapStateToProps(state) {
	return {
		user: state.user,
		loreline: state.lorelineId,
		lorelineArray: state.lorelineArray,
	}
}

function matchDispatchToProps(dispatch) {
	return bindActionCreators(
		{
			setLoreline: setLoreline,
			setLoading: setLoading,
			setLorelineArray: setLorelineArray,
		},
		dispatch
	)
}
