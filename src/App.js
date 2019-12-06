import React, { useState, useEffect } from 'react'
import {
  createMuiTheme,
  MuiThemeProvider,
  CssBaseline,
  makeStyles
} from '@material-ui/core'
import axios from 'axios'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import './App.css'

import LoginForm from './components/LoginForm'
import Home from './components/Home'
import RegisterForm from './components/RegisterForm'
import RegisterConfirmation from './components/RegisterConfirmation'
import ForgotPassword from './components/ForgotPassword'

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
    secondary: {
      // contrast: black
      main: '#000'
    }
  }
})

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
    secondary: {
      // contrast: white
      main: '#fff'
    },
    type: 'dark'
  }
})

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex'
  },
  center: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  }
}))

export default function App() {
  const [user, setUser] = useState({})
  const [auth, setAuth] = useState(false)
  const [theme, setTheme] = useState('dark')

  const classes = useStyles()

  useEffect(() => {
    let token = localStorage.getItem('token')
    if (token) {
      axios
        .put('/users/token', { token })
        .then(res => {
          localStorage.setItem('token', res.data)
          setAuth(true)
        })
        .catch(error => console.log(error))
    }
  })

  const tryLogin = async (email, password) => {
    try {
      const { data } = await axios.post('/users/token', {
        email,
        password
      })
      localStorage.setItem('token', data)
      console.log(data)
      setAuth(true)
      return true
    } catch (err) {
      console.log('Login failed!')
      return false
    }
  }

  const logout = () => {
    localStorage.removeItem('token')
    setAuth(false)
  }

  return (
    <MuiThemeProvider theme={theme === 'dark' ? dark : light}>
      <CssBaseline />
      <Router>
        <div className={classes.root}>
          {auth && <Redirect to='/app' />}

          <Route exact path='/'>
            <LoginForm className={classes.center} tryLogin={tryLogin} />
          </Route>

          <Route path='/forgot' component={ForgotPassword} />
          <Route path='/app'>
            <Home logout={logout} auth={auth} />
          </Route>
          <Route exact path='/register' component={RegisterForm} />
          <Route path='/register/confirm' component={RegisterConfirmation} />
        </div>
      </Router>
    </MuiThemeProvider>
  )
}
