/** @format */

import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
  makeStyles,
  Grid,
  Typography,
  Snackbar,
  IconButton,
  Card,
  CardHeader,
  CardActionArea,
  Fab,
  Divider,
  Tooltip,
  CardMedia,
  CardActions
} from '@material-ui/core'
import axios from 'axios'
import CloseIcon from '@material-ui/icons/Close'
import { Delete, FileCopy } from '@material-ui/icons'
import AddIcon from '@material-ui/icons/Add'
import { setLoreline } from '../actions/index'
import NewLorelineDialog from './loreline_interaction/NewLorelineDialog'
import DeleteLorelineDialog from './loreline_interaction/DeleteLorelineDialog'

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
  },
  card: {
    textOverflow: 'ellipsis',
    width: 350,
    margin: 10
  },
  selectedCard: {
    textOverflow: 'ellipsis',
    width: 350,
    margin: 10,
    border: '2px solid #f78d1e'
  },
  cardimage: {
    height: 140
  },
  cardheader: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    height: 35,
    width: 320
  }
}))

export default connect(
  mapStateToProps,
  matchDispatchToProps
)(function Lorelines(props) {
  const classes = useStyles()
  const [deleteDialogOpen, setDeleteDialogOpen] = React.useState(false)
  const [usingStaticEnities, setUsingStaticEntities] = React.useState(true)
  const [newDialogOpen, setNewDialogOpen] = React.useState(false)
  const [deleteLorelineId, setDeleteLorelineId] = React.useState('')
  const [deleteLorelineName, setDeleteLorelineName] = React.useState('')
  const [creationFeedbackOpen, setCreationFeedbackOpen] = React.useState(false)
  const [lorelineName, setLorelineName] = useState('')
  const [submitAttempted, setSubmitAttempted] = useState(false)
  const [lorelineArray, setLorelineArray] = useState([])

  const handleDeleteDialogOpen = (id, name) => {
    setDeleteLorelineId(id)
    setDeleteLorelineName(name)
    setDeleteDialogOpen(true)
  }

  const handleDeleteDialogClose = () => {
    setDeleteDialogOpen(false)
  }

  const handleNewDialogOpen = (id, name) => {
    setNewDialogOpen(true)
  }

  const handleNewDialogClose = (id, name) => {
    setNewDialogOpen(false)
    setLorelineName('')
    setUsingStaticEntities(true)
    setSubmitAttempted(false)
  }

  const toggleUsingStaticEntities = () => {
    setUsingStaticEntities(!usingStaticEnities)
  }

  const GetLorelines = async () => {
    try {
      const response = await axios.get(
        `https://lorelines-expressapi.herokuapp.com/api/users/${props.user.id}/lorelines`
      )
      setLorelineArray(response.data)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    GetLorelines()
  }, [])

  const onLorelineNameChange = e => setLorelineName(e.target.value)

  const handleFeedbackClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }
    setCreationFeedbackOpen(false)
  }

  const deleteLorelineFromDB = async (e, id) => {
    e.preventDefault()
    console.log('in delete')
    console.log(id)
    try {
      const { data } = await axios.delete(
        `https://lorelines-expressapi.herokuapp.com/api/users/${props.user.id}/lorelines/${id}`
      )
      GetLorelines()
      handleDeleteDialogClose()
      return true
    } catch (err) {
      console.log(err.message)
      return false
    }
  }

  const onNewLorelineSubmit = async e => {
    e.preventDefault()
    setSubmitAttempted(true)
    if (lorelineName !== '') {
      let accept = await props.tryLorelineAdd(lorelineName)
      setLorelineName('')
      setSubmitAttempted(false)
      setCreationFeedbackOpen(true)
      GetLorelines()
      handleNewDialogClose()
      if (!accept) {
      }
      return accept
    } else {
      return false
    }
  }

  return (
    <main className={classes.root}>
      <form>
        <div style={{ marginTop: 20 }}>
          {/************************************Button that opens add loreline dialog******************************/}
          <Fab
            style={{
              position: 'absolute',
              bottom: 20,
              right: 20
            }}
            variant="extended"
            size="large"
            color="primary"
            aria-label="add"
            className={classes.margin}
            onClick={() => handleNewDialogOpen()}
          >
            <AddIcon className={classes.extendedIcon} />
            New Loreline
          </Fab>
          {/*********************** Popup menu for FAB ****************************************/}
          <NewLorelineDialog
            isOpen={newDialogOpen}
            handleNewDialogClose={handleNewDialogClose}
            submitAttempted={submitAttempted}
            lorelineName={lorelineName}
            onLorelineNameChange={onLorelineNameChange}
            usingStaticEnities={usingStaticEnities}
            toggleUsingStaticEntities={toggleUsingStaticEntities}
            onNewLorelineSubmit={onNewLorelineSubmit}
          />
          {/*********************Small FeedBack to when a lorelines added*******************************/}
          <Snackbar
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left'
            }}
            open={creationFeedbackOpen}
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
              {lorelineArray.map(loreline => (
                <Grid item key={lorelineArray.indexOf(loreline)}>
                  <Card
                    className={
                      props.loreline === loreline._id
                        ? classes.selectedCard
                        : classes.card
                    }
                  >
                    <Tooltip title="Select this loreline">
                      <CardActionArea
                        onClick={() => {
                          props.setLoreline(loreline._id)
                        }}
                      >
                        <CardMedia
                          className={classes.cardimage}
                          image="https://cdn.mos.cms.futurecdn.net/YdAaqJNxhLZ66zmRZ3T58D.jpg"
                        />
                        <CardHeader
                          title={
                            <Typography
                              variant="h5"
                              className={classes.cardheader}
                            >
                              {loreline.name}
                            </Typography>
                          }
                          subheader={`Last Modified: ${new Date(
                            loreline.modified
                          ).toLocaleDateString()} at 
                        ${new Date(loreline.modified).toLocaleTimeString()}`}
                        />
                      </CardActionArea>
                    </Tooltip>
                    <Divider />
                    <CardActions>
                      <Tooltip title="Delete">
                        <IconButton
                          onClick={() =>
                            handleDeleteDialogOpen(loreline._id, loreline.name)
                          }
                        >
                          <Delete />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title="Duplicate">
                        <IconButton
                          onClick={() =>
                            handleDeleteDialogOpen(loreline._id, loreline.name)
                          }
                        >
                          <FileCopy />
                        </IconButton>
                      </Tooltip>
                    </CardActions>
                    {/************************************Delete Loreline PopUp ********************************/}
                    <DeleteLorelineDialog
                      deleteDialogOpen={deleteDialogOpen}
                      handleDeleteDialogClose={handleDeleteDialogClose}
                      deleteLorelineName={deleteLorelineName}
                      deleteLorelineId={deleteLorelineId}
                      deleteLorelineFromDB={deleteLorelineFromDB}
                    />
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
    user: state.user,
    loreline: state.lorelineId
  }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({ setLoreline: setLoreline }, dispatch)
}
