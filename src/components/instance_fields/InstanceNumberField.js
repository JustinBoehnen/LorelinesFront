/** @format */

import React from 'react'
import { makeStyles, CardContent, Typography, Card, InputBase, Tooltip } from '@material-ui/core'

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

export default function InstanceNumberField(props) {
	const classes = useStyles()

	const handleChange = e => {
		props.setContent(props.index, e.target.value)
	}

	return (
		<main className={classes.root}>
			<Tooltip title="This is a number field">
				<Card className={classes.card}>
					<CardContent>
						<Typography color="textSecondary" gutterBottom>
							{props.label}
						</Typography>
						<InputBase
							type="number"
							value={props.content}
							onChange={handleChange}
							className={classes.input}
							placeholder="Content"
							fullWidth
						/>
					</CardContent>
				</Card>
			</Tooltip>
		</main>
	)
}
