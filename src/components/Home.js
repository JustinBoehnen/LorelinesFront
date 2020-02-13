import React, { useState } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { makeStyles } from '@material-ui/core'
import axios from 'axios'

import Topbar from './Topbar'
import Sidebar from './Sidebar'

import Timeline from './Timeline'
import Account from './Account'
import Directory from './Directory'
import About from './About'
import Lorelines from './Lorelines'

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
  const tryLorelineAdd = async name => {
    try {
      const { data } = await axios.post(
        'https://lorelines-expressapi.herokuapp.com/api/users/5e448e579532070017431edc/lorelines',
        {
          name
        }
      )
      console.log("Added loreline with name: " + name + " and id: " + data);
    } catch (err) {
      return false
    }
  }
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

        <Route path='/app/account'></Route>

        <Route path='/app/lorelines'>
          <Lorelines tryLorelineAdd={tryLorelineAdd} />
        </Route>

        <Route path='/app/new' render={() => <div className={classes.box} />} />

        <Route path='/app/timeline'>
          <Timeline />
        </Route>

        <Route path='/app/directory'></Route>

        <Route path='/app/directory'></Route>

        <Route path='/app/about'>
          <About />
        </Route>
      </div>
    </div>
  )
}
