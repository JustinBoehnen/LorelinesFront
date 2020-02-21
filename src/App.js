/** @format */

import React, { useState, useEffect } from 'react';
import {
  createMuiTheme,
  MuiThemeProvider,
  CssBaseline,
  makeStyles,
  Backdrop,
  CircularProgress
} from '@material-ui/core';
import axios from 'axios';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import './App.css';

import LoginForm from './components/LoginForm';
import Home from './components/Home';
import RegisterForm from './components/RegisterForm';
import RegisterConfirmation from './components/RegisterConfirmation';
import ForgotPassword from './components/ForgotPassword';
import Lorelines from './components/Lorelines';

const jwtDecode = require('jwt-decode');

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
});

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
});

const useStyles = makeStyles(theme => ({
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
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff'
  }
}));

export default function App() {
  const [loading, SetLoading] = useState(false);
  const [auth, setAuth] = useState(false);
  const [theme, setTheme] = useState('dark');

  const classes = useStyles();

  useEffect(() => {
    let token = localStorage.getItem('token');
    if (token) {
      axios
        .put('https://lorelines-expressapi.herokuapp.com/api/users/token', {
          token
        })
        .then(res => {
          localStorage.setItem('token', res.data);
          const parse = jwtDecode(res.data);
          console.log(parse);
          //Store user data with redux /\
          setAuth(true);
        })
        .catch(err => console.log(err));
    }
  });

  const tryLogin = async (email, password) => {
    try {
      SetLoading(true);
      const { data } = await axios.post(
        'https://lorelines-expressapi.herokuapp.com/api/users/token',
        {
          email,
          password
        }
      );
      localStorage.setItem('token', data);
      const parse = jwtDecode(data);
      console.log('User Data:' + parse);
      //Store user data with redux /\
      SetLoading(false);
      setAuth(true);
      return true;
    } catch (err) {
      SetLoading(false);
      return false;
    }
  };

  const tryLorelineAdd = async LorelineName => {
    try {
      const { data } = await axios.post(
        'https://lorelines-expressapi.herokuapp.com/api/lorelines',
        {
          LorelineName
        }
      );
      return true;
    } catch (err) {
      return false;
    }
  };

  const createUser = async (name, email, password) => {
    try {
      SetLoading(true);
      const { data } = await axios.post(
        'https://lorelines-expressapi.herokuapp.com/api/users',
        {
          name,
          email,
          password
        }
      );
      localStorage.setItem('token', data);
      //Store user data with redux
      SetLoading(false);
      setAuth(true);
      return true;
    } catch (err) {
      SetLoading(false);
      return false;
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setAuth(false);
  };

  return (
    <MuiThemeProvider theme={theme === 'dark' ? dark : light}>
      <CssBaseline />
      <Router>
        <div className={classes.root}>
          <Backdrop className={classes.backdrop} open={loading}>
            <CircularProgress color="inherit" />
          </Backdrop>
          {auth && <Redirect to="/app" />}
          <Route path="/app">
            <Home logout={logout} auth={auth} />
          </Route>
          <Route exact path="/">
            <LoginForm className={classes.center} tryLogin={tryLogin} />
          </Route>
          <Route path="/forgot" component={ForgotPassword} />
          <Route exact path="/register">
            <RegisterForm createUser={createUser} />
          </Route>
          <Route path="/register/confirm" component={RegisterConfirmation} />
        </div>
      </Router>
    </MuiThemeProvider>
  );
}
