/**@format */

import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
	List,
	ListItem,
	Typography,
	Card,
	CardContent,
	Checkbox,
	RadioGroup,
	Grid,
	Radio,
	FormControlLabel,
} from '@material-ui/core'
import InstanceDivider from '../instance_fields/InstanceDivider'
import InstanceHeader from '../instance_fields/InstanceHeader'

const classes = {
	root: {
		flex: 1,
	},
	card: {
		width: 600,
		padding: 10,
	},
	input: {
		flex: 1,
	},
	delete: {
		marginLeft: 'auto',
	},
	content: {
		flex: 1,
	},
}

class InstanceViewer extends Component {
	state = { open: {}, instance: [] }

	componentDidMount() {}

	render() {
		if (!this.props.instance) {
			return <p></p>
		}

		return (
			<List>
				<Typography variant="h5">{this.props.instance.name}</Typography>
				{this.props.instance.content.map((field, i) => {
					if (field.type === 'IMAGE_FIELD') {
						return (
							<ListItem key={field + i} width={600}>
								<Card>
									<CardContent>
										<Grid>
											<Grid item>
												<Typography variant="overline" color="textSecondary" gutterBottom>
													{field.name}
												</Typography>
											</Grid>
											<Grid item>
												<img src={field.content} width={550} />
											</Grid>
										</Grid>
									</CardContent>
								</Card>
							</ListItem>
						)
					} else if (field.type === 'RADIOLIST_FIELD') {
						return (
							<Card>
								<CardContent>
									<Grid>
										<Grid item>
											<Typography variant="overline" color="textSecondary" gutterBottom>
												{field.name}
											</Typography>
										</Grid>
										<Grid item>
											<RadioGroup value={field.value}>
												{field.content.map((option, i) => {
													return (
														<FormControlLabel
															key={option + i}
															value={option + i}
															control={<Radio color="primary" />}
															label={option.name}
															labelPlacement="start"
															disabled
														/>
													)
												})}
											</RadioGroup>
										</Grid>
									</Grid>
								</CardContent>
							</Card>
						)
					} else if (field.type === 'SECTION_DIVIDER') {
						return (
							<ListItem key={field + i}>
								<InstanceDivider />
							</ListItem>
						)
					} else if (field.type === 'SECTION_HEADER') {
						return (
							<ListItem key={field + i}>
								<InstanceHeader index={i} label={field.name} />
							</ListItem>
						)
					} else if (field.type === 'CHECKBOX_FIELD') {
						return (
							<ListItem key={field + i}>
								<Card>
									<CardContent>
										<Grid>
											<Grid item>
												<Typography variant="overline" color="textSecondary" gutterBottom>
													{field.name}
												</Typography>
											</Grid>
											<Grid item>
												<Checkbox disabled checked={field.content[0]} />
											</Grid>
										</Grid>
									</CardContent>
								</Card>
							</ListItem>
						)
					} else {
						return (
							<ListItem key={field + i}>
								<Card width={classes.card.width}>
									<CardContent>
										<Typography variant="overline" color="textSecondary" gutterBottom>
											{field.name}
										</Typography>
										<Typography>{field.content}</Typography>
									</CardContent>
								</Card>
							</ListItem>
						)
					}
				})}
			</List>
		)
	}
}

function mapStatetoProps(state) {
	return {
		instance: state.instance,
	}
}

export default connect(mapStatetoProps)(InstanceViewer)
