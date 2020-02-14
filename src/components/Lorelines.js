import React, { useState } from "react";
import {
  makeStyles,
  Grid,
  Typography,
  Button,
  Divider,
  TextField,
  Snackbar,
  IconButton,
  List,
  ListItem
} from "@material-ui/core";

import CloseIcon from "@material-ui/icons/Close"
import AddBox from "@material-ui/icons/AddBoxOutlined";

const useStyles = makeStyles(theme => ({
  content: {
    flexGrow: 1
  },
  link: {
    color: theme.palette.secondary.main,
    textDecoration: "underline"
  },
  field: {
    width: "20vw",
    minWidth: "250px"
  },
  error: {
    color: theme.palette.error.main
  }
}));


export default function Lorelines(props) {
  
  const classes = useStyles();
  const [open, setFeedbackOpen] = React.useState(false);
  const [loreLineName, setloreLineName] = useState("");
  const [submitAttempted, setSubmitAttempted] = useState(false);
  const [submitFailed, setSubmitFailed] = useState(false);
  const [values, setValues] = React.useState({
    loreLineName: ""
  });
  
  const onLoreLineChange = e => setloreLineName(e.target.value);
  
  const handleFeedbackClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setFeedbackOpen(false);
  };

  const onSubmit = async e => {
    e.preventDefault();
    setSubmitAttempted(true);
    console.log("In onsubmit with name: " + loreLineName);
    if (loreLineName !== "") {
      let accept = await props.tryLorelineAdd(loreLineName);
      setloreLineName("")
      setSubmitAttempted(false)
      setFeedbackOpen(true)
      if (!accept) setSubmitFailed(true);
      return accept;
    } else {
      return false;
    }
  };

  return (
    <main className={classes.root}>
      <form>
        <div width="100vw">
        {/************************************Adding loreline to the DB******************************/}
          <Grid container
            direction="row"
            justify="center"
            allignment="center"
          >
            <Grid item>
              <Typography
                style={{
                  marginTop: 25,
                  marginInlineStart: 20,
                  marginBottom: 25,
                  fontSize: 22,
                  borderRadius: "50px",
                  width: "150px"
                }}
                varient="contained"
                color="primary"
              >
                Add Loreline:
              </Typography>
            </Grid>
            <Grid item>
              <TextField
                error={submitAttempted && loreLineName === ""}
                helperText={
                  submitAttempted && loreLineName === ""
                    ? "This field cannot be empty!"
                    : ""
                }
                className={classes.field}
                name="LorelineName"
                label="Loreline Name:"
                variant="outlined"
                margin="normal"
                autoComplete="off"
                value={loreLineName}
                onChange={onLoreLineChange}
              />
            </Grid>
            <Grid item>
              <Button
                style={{
                  maxWidth: "90px",
                  maxHeight: "55px",
                  minWidth: "90px",
                  minHeight: "55px",
                  marginInlineStart: 10,
                  marginTop: 16,
                  padding: 5,
                  fontSize: 15,
                  borderRadius: "50px",
                  width: "150px"
                }}
                type="submit"
                color="primary"
                variant="contained"
                onClick={async e => await onSubmit(e)}
              >
                Submit
              </Button>
             {/************************************Adds a small popup letting users know that a lorelines been added******************************/}
              <Snackbar
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}               
                open={open}
                autoHideDuration={6000}
                onClose={handleFeedbackClose}                
                action={
                  <React.Fragment>
                    <IconButton size="small" aria-label="close" color="inherit" onClick={handleFeedbackClose}>
                      <CloseIcon fontSize="small" />
                    </IconButton>
                  </React.Fragment>
                }
              />
            </Grid>
          </Grid>
        </div>
        <Divider />

        
        <Typography>Working on retrieving all lorelines from db</Typography>
      </form>
    </main>
  );
}
