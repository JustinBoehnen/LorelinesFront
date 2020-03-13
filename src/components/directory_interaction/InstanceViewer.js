/**@format */

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { List, ListItem, ListItemText } from '@material-ui/core'

class InstanceViewer extends Component {
	state = { open: {}, instance: [] }

	componentDidMount() {}

	render() {
		if (!this.props.instance) {
			return <p></p>
		}

		return (
			<List>
				{this.props.instance.content.map((field, i) => {
					if (field.type === 'RADIOLIST_FIELD')
						return (
							<div key={field + i}>
								<ListItem>
									<ListItemText primary={field.content} secondary={field.name} />
								</ListItem>
							</div>
						)
					else
						return (
							<div key={field + i}>
								<ListItem>
									<ListItemText primary={field.content} secondary={field.name} />
								</ListItem>
							</div>
						)
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
