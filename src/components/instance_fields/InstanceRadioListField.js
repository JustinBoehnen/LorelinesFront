/** @format */

import React from 'react'
import { makeStyles, Card, RadioGroup, FormControlLabel, Radio, CardContent, CardHeader } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
	root: {
		flex: 1,
	},
	card: {
		minWidth: 300,
	},
}))

export default function InstanceRadioListField(props) {
	const handleChange = (event) => {
		props.setValue(props.index, event.target.value)
	}

	const classes = useStyles()

	return (
		<main className={classes.root}>
			<Card className={classes.card}>
				<CardHeader subheader={props.label} />
				<CardContent>
					<RadioGroup value={props.content} onChange={handleChange}>
						{props.options.map((option, i) => {
							return (
								<FormControlLabel
									key={option + i}
									value={option + i}
									control={<Radio color="primary" />}
									label={option.name}
									labelPlacement="start"
								/>
							)
						})}
					</RadioGroup>
				</CardContent>
			</Card>
		</main>
	)
}
