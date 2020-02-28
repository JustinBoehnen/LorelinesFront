import React, { useEffect, useState } from "react";
import {
  makeStyles,
  Grid,
  Typography,
  Button,
  Divider,
  TextField,
  Snackbar,
  IconButton,
  Card,
  CardHeader,
  ButtonBase,
  CardActionArea,
  List,
  ListItem
} from "@material-ui/core";
import axios from 'axios'
import CloseIcon from "@material-ui/icons/Close"
import AddBox from "@material-ui/icons/AddBoxOutlined";

const useStyles = makeStyles(theme => ({
  content: {
    flexGrow: 1
  },
  link: {
    color: theme.palette.secondary.main,
    textDecoration: 'underline'
  },
  field: {
    width: '20vw',
    minWidth: '250px'
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
  const [loreLineArray, setLoreLineArray] = useState([]);
  const [values, setValues] = React.useState({
    loreLineName: ''
  });
  var id = props.UserId();


  const GetLorelines = async () => {
    try {
      const response = await axios.get(
        `https://lorelines-expressapi.herokuapp.com/api/users/${id}/lorelines`
      )
      setLoreLineArray(response.data)
    } catch (err) {
      console.log(err);
    }
  }

    useEffect(() => {
      GetLorelines()
    }, [])

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
    if (loreLineName !== "") {
      let accept = await props.tryLorelineAdd(loreLineName);
      setloreLineName("")
      setSubmitAttempted(false)
      GetLorelines()
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
                  borderRadius: '50px',
                  width: '150px'
                }}
                varient="contained"
                color="primary"
              >
                Add Loreline:
              </Typography>
            </Grid>
            <Grid item>
              <TextField
                error={submitAttempted && loreLineName === ''}
                helperText={
                  submitAttempted && loreLineName === ''
                    ? 'This field cannot be empty!'
                    : ''
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
                  maxWidth: '90px',
                  maxHeight: '55px',
                  minWidth: '90px',
                  minHeight: '55px',
                  marginInlineStart: 10,
                  marginTop: 16,
                  padding: 5,
                  fontSize: 15,
                  borderRadius: "50px",

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
                message="Loreline Added"
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
        <Typography style=
        {{ marginInlineStart: 20, 
          fontSize: 20 }} 
          color = 'primary'>Current lorelines:</Typography>
        <div className={classes.root}>
          {/*************************************Dynamically adding cards to screen***************/}
          <Grid
            container
            //spacing={2}
            direction="row"
            justify="flex-start"
            alignItems="flex-start"
          >
            {loreLineArray.map(elem => (
              <Grid item
                key={loreLineArray.indexOf(elem)}>
                <Card style={{
                  margin: 20,
                  maxWidth: '300px',
                  minWidth: '300px',
                }}>
                  <CardActionArea onClick={() => {console.log(elem._id)}}>
                    <CardHeader
                      title={`${elem.name}`}
                      subheader={`Last Modified: ${elem.modified}`}
                    />
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
          </Grid>
        </div>
      </form>
    </main >
  );
}
