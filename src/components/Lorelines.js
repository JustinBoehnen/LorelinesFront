import React, { useEffect, useState } from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import {
  makeStyles,
  Grid,
  Typography,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  TextField,
  Snackbar,
  IconButton,
  Card,
  CardHeader,
  CardActionArea,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Fab
} from "@material-ui/core"
import axios from "axios"
import CloseIcon from "@material-ui/icons/Close"
import DeleteIcon from "@material-ui/icons/DeleteForever"
import AddIcon from "@material-ui/icons/Add"
import { setLoreline } from "../actions/index"

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
}))

export default connect(
  mapStateToProps,
  matchDispatchToProps
)(function Lorelines(props) {
  const classes = useStyles()
  const [deleteOpen, setDeleteOpen] = React.useState(false)
  const [staticEnities, setStaticEntities] = React.useState(false)
  const [addOpen, setAddOpen] = React.useState(false)
  const [deleteId, setDeleteId] = React.useState("")
  const [deleteName, setDeleteName] = React.useState("")
  const [open, setFeedbackOpen] = React.useState(false)
  const [loreLineName, setloreLineName] = useState("")
  const [submitAttempted, setSubmitAttempted] = useState(false)
  const [submitFailed, setSubmitFailed] = useState(false)
  const [loreLineArray, setLoreLineArray] = useState([])
  const [values, setValues] = React.useState({
    loreLineName: ""
  })

  const handleClickDeleteOpen = (id, name) => {
    setDeleteId(id)
    setDeleteName(name)
    setDeleteOpen(true)
  }

  const handleDeleteClose = () => {
    setDeleteOpen(false)
  }

  const handleClickAddOpen = (id, name) => {
    setAddOpen(true)
  }

  const handleAddClose = () => {
    setAddOpen(false)
  }

  const toggleStaticEntities = () => {
    if (staticEnities === true) setStaticEntities(false)
    else setStaticEntities(true)
  }
  const GetLorelines = async () => {
    try {
      const response = await axios.get(
        `https://lorelines-expressapi.herokuapp.com/api/users/${props.user.id}/lorelines`
      )
      setLoreLineArray(response.data)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    GetLorelines()
  }, [])

  const onLoreLineChange = e => setloreLineName(e.target.value)

  const handleFeedbackClose = (event, reason) => {
    if (reason === "clickaway") {
      return
    }
    setFeedbackOpen(false)
  }

  const lorelneDelete = async (e, id) => {
    e.preventDefault()
    console.log("in delete")
    console.log(id)
    try {
      const { data } = await axios.delete(
        `https://lorelines-expressapi.herokuapp.com/api/users/${props.user.id}/lorelines/${id}`
      )
      GetLorelines()
      handleDeleteClose()
      return true
    } catch (err) {
      console.log(err.message)
      return false
    }
  }

  const onLorelineAddSubmit = async e => {
    e.preventDefault()
    setSubmitAttempted(true)
    if (loreLineName !== "") {
      let accept = await props.tryLorelineAdd(loreLineName)
      setloreLineName("")
      setSubmitAttempted(false)
      setFeedbackOpen(true)
      GetLorelines()
      handleAddClose()
      if (!accept) {
        setSubmitFailed(true)
      }
      return accept
    } else {
      return false
    }
  }

  return (
    <main className={classes.root}>
      <form>
        <div width="100vw">
          {/************************************Button that opens add loreline dialog******************************/}
          <Fab
            style={{
              position: "absolute",
              bottom: 20,
              right: 20
            }}
            variant="extended"
            size="large"
            color="primary"
            aria-label="add"
            className={classes.margin}
            onClick={() => handleClickAddOpen()}
          >
            <AddIcon className={classes.extendedIcon} />
            Add Loreline
          </Fab>
          {/*********************** Popup menu for FAB ****************************************/}
          <Dialog
            open={addOpen}
            onClose={handleAddClose}
            aria-labelledby="alert-dialog-title"
            fullWidth="md"
          >
            <DialogTitle id="alert-dialog-title">
              <span style={{ color: "#f78d1e" }}>Add a loreline:</span>
            </DialogTitle>
            <DialogContent>
              <TextField
                error={submitAttempted && loreLineName === ""}
                helperText={
                  submitAttempted && loreLineName === ""
                    ? "This field cannot be empty!"
                    : ""
                }
                autoFocus
                name="LorelineName"
                label="Loreline Name"
                margin="dense"
                autoComplete="off"
                value={loreLineName}
                onChange={onLoreLineChange}
                fullWidth
              />
              <FormGroup row>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={staticEnities}
                      onChange={toggleStaticEntities}
                      color="primary"
                    />
                  }
                  label="Import static entities"
                />
              </FormGroup>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleAddClose} color="primary">
                Cancel
              </Button>
              <Button
                onClick={async e => await onLorelineAddSubmit(e)}
                color="primary"
                autoFocus
              >
                Add Loreline
              </Button>
            </DialogActions>
          </Dialog>
          {/*********************Small FeedBack to when a lorelines added*******************************/}
          <Snackbar
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left"
            }}
            open={open}
            autoHideDuration={6000}
            onClose={handleFeedbackClose}
            message="Loreline Added"
            action={
              <React.Fragment>
                <IconButton
                  size="small"
                  aria-label="close"
                  color="inherit"
                  onClick={handleFeedbackClose}
                >
                  <CloseIcon fontSize="small" />
                </IconButton>
              </React.Fragment>
            }
          />

          {/***************************************Display of the main screen**********************/}
          <Typography
            style={{ marginInlineStart: 20, fontSize: 20 }}
            color="primary"
          >
            Select an existing loreline:
          </Typography>
          <div className={classes.root}>
            {/*************************************Dynamically adding cards to screen***************/}
            <Grid
              container
              //spacing={2}
              direction="row"
              justify="flex-start"
              alignItems="center"
            >
              {loreLineArray.map(elem => (
                <Grid item key={loreLineArray.indexOf(elem)}>
                  <Card
                    style={{
                      margin: 10,
                      width: 250,
                      //height: 220
                    }}
                  >
                    <CardActionArea
                      onClick={() => {
                        props.setLoreline(elem._id)
                      }}
                    >
                      <CardHeader
                        title={`${elem.name}`}
                        subheader={`Last Modified: ${elem.modified}`}
                      />
                    </CardActionArea>
                    <IconButton
                      style={{
                        marginBottom: 2,
                        marginLeft: 2
                      }}
                      onClick={() => handleClickDeleteOpen(elem._id, elem.name)}
                    >
                      <DeleteIcon color="primary" />
                    </IconButton>
                    {/************************************Delete Loreline PopUp ********************************/}
                    <Dialog
                      open={deleteOpen}
                      onClose={handleDeleteClose}
                      aria-labelledby="alert-dialog-title"
                      aria-describedby="alert-dialog-description"
                    >
                      <DialogTitle id="alert-dialog-title">
                        {'Are you sure you want to delete "' +
                          deleteName +
                          '"?'}
                      </DialogTitle>
                      <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                          This will permently delete this loreline, this is
                          unreversible!
                        </DialogContentText>
                      </DialogContent>
                      <DialogActions>
                        <Button onClick={handleDeleteClose} color="primary">
                          Cancel
                        </Button>
                        <Button
                          onClick={e => {
                            lorelneDelete(e, deleteId)
                          }}
                          color="primary"
                          autoFocus
                        >
                          Delete
                        </Button>
                      </DialogActions>
                    </Dialog>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </div>
        </div>
      </form>
    </main>
  )
})

function mapStateToProps(state) {
  return {
    user: state.user
  }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({ setLoreline: setLoreline }, dispatch)
}
