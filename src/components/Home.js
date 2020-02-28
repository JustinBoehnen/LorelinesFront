/** @format */

import React, { useState, Component } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { makeStyles } from '@material-ui/core'
import axios from 'axios'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { setWindowWidth, setWindowHeight } from '../actions/index'

import Topbar from './Topbar'
import Sidebar from './Sidebar'

import Timeline from './Timeline'
import Account from './Account'
import Directory from './Directory'
import About from './About'
import Lorelines from './Lorelines'

const styleClasses = () => ({
  root: {
    display: 'flex'
  },
  box: {
    width: '100px',
    height: '100px',
    borderStyle: 'solid',
    borderWidth: '2px 2px 2px 2px',
    backgroundColor: 'red'
  },
  drawer: {
    openWidth: 240,
    closedWidth: 58
  },
  topBar: {
    height: 64
  }
})

const drawerOpenWidth = 240
const drawerClosedWidth = 58
const topBarHeight = 64

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      drawerOpen: false,
      width: 0,
      height: 0
    }
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this)
  }

  componentDidMount() {
    this.updateWindowDimensions()
    window.addEventListener('resize', this.updateWindowDimensions)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions)
  }

  updateWindowDimensions() {
    if (this.state.drawerOpen)
      this.state.width = window.innerWidth - drawerOpenWidth
    else this.state.width = window.innerWidth - drawerClosedWidth
    this.state.height = window.innerHeight - 64

    this.props.setWindowWidth(this.state.width)
    this.props.setWindowHeight(this.state.height)

    console.log(this.state.width)
    console.log(this.state.height)
  }

  toggleDrawer = open => {
    this.state.drawerOpen = open
    this.updateWindowDimensions()
  }

  tryLorelineAdd = async LorelineName => {
    try {
      var id = 12345 //JUSTIN REDUX
      const { data } = await axios.post(
        `https://lorelines-expressapi.herokuapp.com/api/users/${id}/lorelines`,
        {
          LorelineName
        }
      )
      return true
    } catch (err) {
      return false
    }
  }
  render() {
    return (
      <div>
        {!this.props.auth && <Redirect to='/' />}
        <Topbar
          logout={this.props.logout}
          drawerOpen={this.state.drawerOpen}
          setDrawerOpen={this.toggleDrawer}
        />
        <div className={styleClasses.root}>
          <Sidebar
            drawerOpen={this.state.drawerOpen}
            setDrawerOpen={this.toggleDrawer}
          />
          <div
            width={this.props.window.width / 3}
            height={this.props.window.height / 3}
            style={{
              marginLeft: this.state.drawerOpen
                ? drawerOpenWidth
                : drawerClosedWidth,
              marginTop: topBarHeight
            }}
          >
            <Route path='/app/account'>
              <Account />
            </Route>

            <Route path='/app/lorelines'>
              <Lorelines tryLorelineAdd={this.tryLorelineAdd} />
            </Route>

            <Route path='/app/new'>
              <h1>Hello, World</h1>
            </Route>

            <Route path='/app/timeline'>
              <Timeline />
            </Route>

            <Route path='/app/directory'>
              <Directory />
            </Route>

            <Route path='/app/about'>
              <About />
            </Route>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    window: state.window
  }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators(
    { setWindowWidth: setWindowWidth, setWindowHeight: setWindowHeight },
    dispatch
  )
}

export default connect(mapStateToProps, matchDispatchToProps)(Home)
