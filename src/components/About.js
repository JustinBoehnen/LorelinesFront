/** @format */

import React from 'react'
import { connect } from 'react-redux'
import { makeStyles, Grid, Typography, Card, CardContent } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	link: {
		color: theme.palette.secondary.main,
		textDecoration: 'underline',
	},
}))

export default connect(mapStateToProps)(function About(props) {
	const classes = useStyles()

	return (
		<main>
			<Grid
				className={classes.root}
				style={{
					textAlign: 'center',
					height: props.window.height,
				}}
				container
				direction="column"
				justify="center"
				alignItems="center"
			>
				<Grid item>
					<Card width="500">
						<CardContent>
							<Typography
								style={{
									fontSize: 14,
								}}
							>
								Lorelines.com is the junior project of the Oregon Institute of Technology students:
							</Typography>
							<Typography
								style={{
									fontWeight: 500,
									fontSize: 20,
									color: '#f78d1e',
								}}
							>
								Justin Boehnen, Evan Clark, Seth Ray, and Isaac Medlin
							</Typography>
							<Typography
								style={{
									fontSize: 14,
								}}
							>
								Lorelines v0.81 ALPHA
							</Typography>
							<Typography
								style={{
									fontSize: 14,
								}}
							>
								© 2020 All rights reserved
							</Typography>
						</CardContent>
					</Card>
				</Grid>
			</Grid>
		</main>
	)
})

function mapStateToProps(state) {
	return {
		window: state.window,
	}
}
