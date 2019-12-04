import React, { useState } from 'react'
import {
  createMuiTheme,
  MuiThemeProvider,
  CssBaseline,
  makeStyles
} from '@material-ui/core'
//import axios from 'axios'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import './App.css'

import LoginForm from './components/LoginForm'
import Home from './components/Home'
import RegisterForm from './components/RegisterForm'
import RegisterConfirmation from './components/RegisterConfirmation'
import ForgotPassword from './components/ForgotPassword'

//test imports
import Testing from './components/Testing'

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
  const [email, setEmail] = useState('')
  const [auth, setAuth] = useState(false)
  const [theme, setTheme] = useState('dark')

  const classes = useStyles()
  const payload = {
    email,
    setTheme
  }

  const tryLogin = (tryEmail, tryPassword) => {
    setAuth(true)
    setEmail(tryEmail)

    /*axios
      .post('http://localhost:3000/api/user/auth', {
        Email: { tryEmail },
        Password: { tryPassword }
      })
      .then(res => console.log(res.error))
      .catch(error => console.log(error))*/
  }

  return (
    <MuiThemeProvider theme={theme === 'dark' ? dark : light}>
      <CssBaseline />
      <Router>
        <div className={classes.root}>
          <Redirect
            to={{
              pathname: auth ? '/app' : '/'
            }}
          />

          <Route exact path='/'>
            <LoginForm className={classes.center} tryLogin={tryLogin} />
          </Route>

          <Route path='/forgot' component={ForgotPassword} />
          <Route exact path='/testing' component={Testing} />
          <Route exact path='/favicon.ico' to='../public/favicon.ico' />
          <Route path='/app'>
            <Home props={payload} />
          </Route>
          <Route exact path='/register' component={RegisterForm} />
          <Route path='/register/confirm' component={RegisterConfirmation} />
        </div>
      </Router>
    </MuiThemeProvider>
  )
}
