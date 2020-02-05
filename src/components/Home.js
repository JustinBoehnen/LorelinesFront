import React, { useState } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { makeStyles } from '@material-ui/core'

import Topbar from './Topbar'
import Sidebar from './Sidebar'

import Timeline from './Timeline'
import Account from './Account'
import Directory from './Directory'
<<<<<<< HEAD
import About from './About'
=======
import Timeline from './Timeline'
>>>>>>> 767306ffee3e31bfdbef478cbc37897e06541946

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
      {!props.auth && <Redirect to='/' />}
      <Topbar
        logout={props.logout}
        drawerOpen={drawerOpen}
        setDrawerOpen={setDrawerOpen}
      />
      <div className={classes.root}>
        <Sidebar drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen} />

        <Route path='/app/account'>
          <Account />
        </Route>

        <Route path='/app/lorelines' render={() => <h1>Lorelines</h1>} />
        <Route path='/app/new' render={() => <div className={classes.box} />} />
        <Route path='/app/timeline'>
          <Timeline />
<<<<<<< HEAD
=======
          </Route>

        <Route path='/app/directory'>
>>>>>>> 767306ffee3e31bfdbef478cbc37897e06541946
        </Route>

        <Route path='/app/directory'></Route>

        <Route path='/app/about'>
          <About />
        </Route>
      </div>
    </div>
  )
}
