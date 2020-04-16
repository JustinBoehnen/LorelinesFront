import React, { useState } from "react";
import axios from "axios";
import { Grid, Typography, makeStyles, TextField, Button, Input } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
	root: {
	  flexGrow: 1,
	},
	field: {
	  width: "23vw",
	  minWidth: "250px",
	},
	link: {
	  color: theme.palette.secondary.main,
	  textDecoration: "underline",
	},
	error: {
	  color: theme.palette.error.main,
	},
  }));

export default function SecurityQ(props) {
	const classes = useStyles();
   const [answer, setAnswer] = useState("")
  return (
      <main className={classes.root}>
          
      </main>
  )
}



