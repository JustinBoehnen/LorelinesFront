import React, { useState } from "react";
import axios from "axios";
import { Grid, Typography, TextField, Button, Input } from "@material-ui/core";


export default connect(
  mapStateToProps,
  matchDispatchToProps
)(function ChangePassword(props) {

  const [newPassword, setNewPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");

  return (
      <main className={classes.root}>
          
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
