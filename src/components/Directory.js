/** @format */

import React from 'react'
import axios from 'axios'
import { bindActionCreators } from 'redux'
import { setLoading } from '../actions/index'
import { Grid, Fab, makeStyles, Drawer, Typography } from '@material-ui/core'
import DirectoryList from './directory_interaction/DirectoryList'
import InstanceViewer from './directory_interaction/InstanceViewer'
import CustomEntityCreator from './directory_interaction/CustomEntityCreator'
import EntityInstanceCreator from './directory_interaction/EntityInstanceCreator'
import { connect } from 'react-redux'
import { Add } from '@material-ui/icons'

const drawerWidth = 300

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex'
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  },
  toolbar: theme.mixins.toolbar
}))

export default connect(
  mapStateToProps,
  matchDispatchToProps
)(function Directory(props) {
  const [mode, setMode] = React.useState(0)
  const [entities, setEntites] = React.useState([])

  const classes = useStyles()
  const modes = {
    IDLE: 0,
    ENTITY_CREATION: 1,
    INSTANCE_CREATION: 2,
    INSTANCE_VIEWER: 3
  }

  const addEntityToList = entity => {
    setEntites(entities.concat(entity))
  }

  const getDirectoryList = async () => {
    if (props.lorelineId !== null) {
      props.setLoading(true)
      try {
        await axios
          .get(
            `https://lorelines-expressapi.herokuapp.com/api/lorelines/${props.lorelineId}/directory/`
          )
          .then(res => {
            console.log('NEW DATA: ', res.data)
            setEntites(res.data)
            props.setLoading(false)
          })
      } catch (err) {
        props.setLoading(false)
      }
    }
  }

  const handleNewEntityClicked = () => {
    setMode(modes.ENTITY_CREATION)
  }

  const ModeComponent = () => {
    switch (mode) {
      case modes.ENTITY_CREATION:
        return <CustomEntityCreator addEntityToList={addEntityToList} />
      case modes.INSTANCE_CREATION:
        return <EntityInstanceCreator />
      case modes.INSTANCE_VIEWER:
        return <InstanceViewer />
      default:
        return <Typography>Select an entity or instance</Typography>
    }
  }

  return (
    <main className={classes.root}>
      <Grid
        style={{
          textAlign: 'center',
          marginTop: 20
        }}
        container
        direction='column'
        justify='center'
        alignItems='center'
      >
        <Grid item>
          <ModeComponent />
        </Grid>
      </Grid>
      <Drawer className={classes.drawer} variant='permanent' anchor='right'>
        <div className={classes.toolbar}></div>
        <DirectoryList
          modes={modes}
          setMode={setMode}
          entites={entities}
          updateList={getDirectoryList}
        />
      </Drawer>
      <Fab
        style={{
          position: 'fixed',
          bottom: 20,
          right: 20,
          zIndex: 1900
        }}
        variant='extended'
        size='large'
        color='primary'
        aria-label='add'
        className={classes.margin}
        onClick={handleNewEntityClicked}
      >
        <Add />
        New Custom Entity
      </Fab>
    </main>
  )
})

function mapStateToProps(state) {
  return {
    window: state.window,
    instanceId: state.instanceId,
    entityId: state.entityId,
    lorelineId: state.lorelineId
  }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      setLoading: setLoading
    },
    dispatch
  )
}
