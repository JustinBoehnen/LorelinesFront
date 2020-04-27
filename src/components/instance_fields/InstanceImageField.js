/** @format */

import React from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import { makeStyles, Typography, Card, Button, CardMedia, CardContent } from '@material-ui/core'
import CloudUploadIcon from '@material-ui/icons/CloudUpload'

const useStyles = makeStyles(theme => ({
	root: {
		flex: 1,
	},
	card: {
		minWidth: 300,
	},
	input: {
		flex: 1,
	},
	image: {
		height: 50,
		'&:hover': {
			height: 140,
		},
	},
	noImage: {
		height: 0,
	},
}))

export default connect(mapStateToProps)(function InstanceImageField(props) {
	const classes = useStyles()

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

		if (!failed)
			getImageURL(files[0]).then(url => {
				console.log(url)
				props.setContent(props.index, url)
			})
	}

	const getImageURL = file => {
		if (file !== null) {
			const data = new FormData()
			data.append('image', file, file.name)

			return axios
				.post(`https://lorelines-expressapi.herokuapp.com/api/users/${props.user.id}/images`, data, {
					headers: {
						accept: 'application/json',
						'Accept-Language': 'en-US,en;q=0.8',
						'Content-Type': `multipart/form-data; boundary=${data._boundary}`,
					},
				})
				.then(res => {
					return res.data
				})
		}
	}

	return (
		<main className={classes.root}>
			<Card className={classes.card}>
				<CardMedia className={props.imageURL != '' ? classes.image : classes.noImage} image={props.imageURL} />
				<CardContent>
					<Typography color="textSecondary" gutterBottom>
						{props.label}
					</Typography>
					<Button
						component="label"
						variant="contained"
						color="default"
						fullWidth
						startIcon={<CloudUploadIcon />}
					>
						Upload Image
						<input
							type="file"
							accept=".jpg, .jpeg, .png"
							onChange={e => handleFileChange(e.target.files)}
							style={{ display: 'none' }}
						/>
					</Button>
				</CardContent>
			</Card>
		</main>
	)
})

function mapStateToProps(state) {
	return {
		user: state.user,
	}
}
