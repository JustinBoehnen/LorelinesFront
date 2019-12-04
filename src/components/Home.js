import React, { useState } from 'react'
import { Route } from 'react-router-dom'
import { makeStyles } from '@material-ui/core'

import Topbar from './Topbar'
import Sidebar from './Sidebar'

import Account from './Account'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex'
  },
  box: {
    width: '100px',
    height: '100px',
    borderStyle: 'solid',
    borderWidth: '2px 2px 2px 2px',
    backgroundColor: 'red'
  }
}))

export default function Home(props) {
  const [drawerOpen, setDrawerOpen] = useState(false)

  const classes = useStyles()

  return (
    <div>
      <Topbar drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen} />
      <div className={classes.root}>
        <Sidebar drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen} />
        <Route path='/app/account' component={Account} />
        <Route path='/app/lorelines' render={() => <h1>Lorelines</h1>} />
        <Route path='/app/new' render={() => <div className={classes.box} />} />
        <Route path='/app/timeline' render={() => <h1>Timeline</h1>} />
        <Route path='/app/directory' render={() => <h1>Directory</h1>} />
        <Route path='/app/about' render={() => <h1>About</h1>} />
      </div>
    </div>
  )
}
