/** @format */

import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'
import axios from 'axios'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { setWindowWidth, setWindowHeight, setLoading } from '../actions/index'

import Topbar from './Topbar'
import Sidebar from './Sidebar'

import Timeline from './Timeline'
import Account from './Account'
import Directory from './Directory'
import About from './About'
import Lorelines from './Lorelines'
//import CreateInstance from './CreateInstance';
import EntityInstanceCreator from './directory_interaction/EntityInstanceCreator'
import CustomEntityCreator from './directory_interaction/CustomEntityCreator'

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
    this.state = { drawerOpen: false, width: 0, height: 0 }
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
      this.setState({ width: window.innerWidth - drawerOpenWidth })
    else this.setState({ width: window.innerWidth - drawerClosedWidth })

    this.setState({ height: window.innerHeight - 64 })

    this.props.setWindowWidth(this.state.width)
    this.props.setWindowHeight(this.state.height)
  }

  toggleDrawer = open => {
    this.setState({ drawerOpen: open })
    this.updateWindowDimensions()
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
            width={this.props.window.width}
            height={this.props.window.height}
            style={{
              marginLeft: this.state.drawerOpen
                ? drawerOpenWidth
                : drawerClosedWidth
            }}
          >
            <Route path='/app/account'>
              <Account />
            </Route>

            <Route path='/app/lorelines'>
              <Lorelines />
            </Route>

            <Route path='/app/new'>
              <h1>Hello, World</h1>
            </Route>

            <Route path='/app/timeline'>
              <Timeline />
            </Route>

            <Route path='/app/directory'>
              <Directory style={{}} />
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
    user: state.user,
    window: state.window
  }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      setWindowWidth: setWindowWidth,
      setWindowHeight: setWindowHeight,
      setLoading: setLoading
    },
    dispatch
  )
}

export default connect(mapStateToProps, matchDispatchToProps)(Home)
