/** @format */

import React from 'react'
import { makeStyles, CardContent, Typography, Card, InputBase } from '@material-ui/core'

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
}))

export default function InstanceTextField(props) {
	const classes = useStyles()

	const handleChange = e => {
		props.setContent(props.index, e.target.value)
	}

	return (
		<main className={classes.root}>
			<Card className={classes.card}>
				<CardContent>
					<Typography color="textSecondary" gutterBottom>
						{props.label}
					</Typography>
					<InputBase
						multiline
						rowsMax="4"
						value={props.content}
						onChange={handleChange}
						className={classes.input}
						placeholder="Content"
						fullWidth
					/>
				</CardContent>
			</Card>
		</main>
	)
}
