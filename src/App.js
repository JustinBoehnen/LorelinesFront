/** @format */

import React, { useState, useEffect, Component } from 'react'
import {
  createMuiTheme,
  MuiThemeProvider,
  CssBaseline,
  makeStyles,
  Backdrop,
  CircularProgress
} from '@material-ui/core'
import axios from 'axios'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'

import './App.css'
import { setUser, setLoading } from './actions/index'
import LoginForm from './components/LoginForm'
import Home from './components/Home'
import RegisterForm from './components/RegisterForm'
import RegisterConfirmation from './components/RegisterConfirmation'
import ForgotPassword from './components/ForgotPassword'

const jwtDecode = require('jwt-decode')

// color theme definition: light
const light = createMuiTheme({
  palette: {
    primary: {
      // accent: orange
      main: '#f78d1e',
      contrastText: '#fff'
    },
    drawer: {
      main: '#d9d9d9',
      text: '#fff',
      icons: '#000'
    },
    secondary: { main: '#000' },
    error: { main: '#ff0000' }
  }
})

// color theme definition: dark
const dark = createMuiTheme({
  palette: {
    primary: {
      // accent: orange
      main: '#f78d1e',
      contrastText: '#fff'
    },
    drawer: {
      main: '#222',
      text: '#fff',
      icons: '#fff'
    },
    secondary: { main: '#fff' },
    error: { main: '#ff0000' },
    type: 'dark'
  }
})

// add themes to a js object
const themes = { dark: dark, light: light }

// this component's styles
const styleClasses = theme => ({
  root: {
    display: 'flex'
  },
  center: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  backdrop: {
    color: '#fff'
  }
})

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      auth: false
    }
  }

  componentDidMount() {
    console.log('MOUNTED 1')

    let token = localStorage.getItem('token')
    if (token) {
      axios
        .put('https://lorelines-expressapi.herokuapp.com/api/users/token', {
          token
        })
        .then(res => {
          localStorage.setItem('token', res.data)
          this.setState({ auth: true, userData: jwtDecode(res.data) })
          var temp = jwtDecode(res.data)
          this.props.setUser({
            id: temp.id,
            name: temp.name,
            email: temp.email
          })
          console.log(this.state.userData)
        })
        .catch(err => console.log(err))
    }

    console.log('MOUNTED 2')
  }

  tryLogin = async (email, password) => {
    try {
      this.setState.loading = true
      const { data } = await axios.post(
        'https://lorelines-expressapi.herokuapp.com/api/users/token',
        {
          email,
          password
        }
      )
      localStorage.setItem('token', data)
      this.setState({ loading: false, auth: true })
      this.props.setUser(jwtDecode(data))
      return true
    } catch (err) {
      this.setState.loading = false
      return false
    }
  }

  createUser = async (name, email, password) => {
    try {
      this.setState.loading = true
      const { data } = await axios.post(
        'https://lorelines-expressapi.herokuapp.com/api/users',
        {
          name,
          email,
          password
        }
      )
      localStorage.setItem('token', data)
      this.setState.auth = true
      this.props.setLoading(false)
      return true
    } catch (err) {
      this.setState.loading = false
      return false
    }
  }

  logout = () => {
    localStorage.removeItem('token')
    this.setState({ auth: false, userData: null })
    console.log('LOGGING OUT')
  }

  render() {
    return (
      <MuiThemeProvider theme={themes[this.props.colorTheme]}>
        <CssBaseline />
        <Router>
          <div className={styleClasses.root}>
            {this.state.auth && <Redirect to='/app' />}
            <Route path='/app'>
              <Home logout={this.logout} auth={this.state.auth} />
            </Route>
            <Route exact path='/'>
              <LoginForm
                className={styleClasses.center}
                tryLogin={this.tryLogin}
              />
            </Route>
            <Route path='/forgot' component={ForgotPassword} />
            <Route exact path='/register'>
              <RegisterForm createUser={this.createUser} />
            </Route>
            <Route path='/register/confirm' component={RegisterConfirmation} />
            <Backdrop
              className={styleClasses.backdrop}
              open={this.props.loading}
            >
              <CircularProgress color='inherit' />
            </Backdrop>
          </div>
        </Router>
      </MuiThemeProvider>
    )
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
    loading: state.loading,
    colorTheme: state.colorTheme
  }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators(
    { setUser: setUser, setLoading: setLoading },
    dispatch
  )
}

export default connect(mapStateToProps, matchDispatchToProps)(App)
