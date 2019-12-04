import React from 'react'
import { Link } from 'react-router-dom'
import {
  makeStyles,
  TextField,
  Grid,
  Typography,
  InputAdornment,
  IconButton,
  Button
} from '@material-ui/core'
import { Visibility, VisibilityOff } from '@material-ui/icons'
import Validator from 'email-validator'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  field: {
    width: '23vw',
    minWidth: '250px'
  },
  link: {
    color: theme.palette.secondary.main,
    textDecoration: 'underline'
  }
}))

export default function RegisterForm(props) {
  const classes = useStyles()
  const [values, setValues] = React.useState({
    name: '',
    email: '',
    confirmEmail: '',
    password: '',
    confirmPassword: '',
    showPassword: false,
    showConfirmPassword: false,
    submitAttempted: false
  })

  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value })
  }

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword })
  }

  const handleClickShowConfirmPassword = () => {
    setValues({ ...values, showConfirmPassword: !values.showConfirmPassword })
  }

  const handleMouseDownPassword = event => {
    event.preventDefault()
  }

  const onSubmit = e => {
    e.preventDefault()
    setValues({ ...values, submitAttempted: true })

    if (Validator.validate(values.email) === true) {
      if (values.email === values.confirmEmail) {
        if (values.password !== '') {
          if (values.password === values.confirmPassword) {
            props.history.push('/register/confirm')
          }
        }
      }
    }
  }

  return (
    <main className={classes.root}>
      <form>
        <Grid
          style={{ height: '100vh', textAlign: 'center' }}
          direction='column'
          justify='center'
          alignItems='center'
          container
        >
          <Grid item>
            <Typography
              style={{
                padding: 2,
                fontWeight: 'bold',
                fontSize: 42
              }}
            >
              Create a new Lorelines account
            </Typography>
          </Grid>
          <Grid item>
            <TextField
              className={classes.field}
              name='name'
              label='Name'
              margin='normal'
              value={values.name}
              onChange={handleChange('name')}
              error={values.submitAttempted && values.name === ''}
              helperText={
                values.submitAttempted && values.name === ''
                  ? 'this field cannot be empty'
                  : ''
              }
            />
          </Grid>
          <Grid item>
            <TextField
              className={classes.field}
              name='email'
              label='Email'
              margin='normal'
              value={values.email}
              onChange={handleChange('email')}
              error={
                (values.submitAttempted && values.email === '') ||
                (values.submitAttempted &&
                  Validator.validate(values.email) === false)
              }
              helperText={
                values.submitAttempted && values.email === ''
                  ? 'this field cannot be empty'
                  : '' ||
                    (values.submitAttempted &&
                      Validator.validate(values.email) === false)
                  ? 'invalid email address'
                  : ''
              }
            />
          </Grid>
          <Grid item>
            <TextField
              className={classes.field}
              name='confirmEmail'
              label='Confirm Email'
              margin='normal'
              value={values.confirmEmail}
              onChange={handleChange('confirmEmail')}
              error={
                values.email !== values.confirmEmail ||
                (values.submitAttempted && values.confirmEmail === '')
              }
              helperText={
                values.submitAttempted && values.confirmEmail === ''
                  ? 'this field cannot be empty'
                  : '' || values.email !== values.confirmEmail
                  ? 'emails do not match'
                  : ''
              }
            />
          </Grid>
          <Grid item>
            <TextField
              className={classes.field}
              name='pass'
              label='Password'
              margin='normal'
              type={values.showPassword ? 'text' : 'password'}
              value={values.password}
              onChange={handleChange('password')}
              error={values.submitAttempted && values.password === ''}
              helperText={
                values.submitAttempted && values.password === ''
                  ? 'this field cannot be empty'
                  : ''
              }
              InputProps={{
                endAdornment: (
                  <InputAdornment position='end'>
                    <IconButton
                      aria-label='toggle password visibility'
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {values.showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                )
              }}
            />
          </Grid>
          <Grid item>
            <TextField
              className={classes.field}
              name='confirmpass'
              label='Confirm Password'
              margin='normal'
              type={values.showConfirmPassword ? 'text' : 'password'}
              value={values.confirmpassword}
              onChange={handleChange('confirmPassword')}
              error={
                values.password !== values.confirmPassword ||
                (values.submitAttempted && values.confirmPassword === '')
              }
              helperText={
                values.submitAttempted && values.confirmPassword === ''
                  ? 'this field cannot be empty'
                  : '' || values.password !== values.confirmPassword
                  ? 'passwords do not match'
                  : ''
              }
              InputProps={{
                endAdornment: (
                  <InputAdornment position='end'>
                    <IconButton
                      aria-label='toggle password visibility'
                      onClick={handleClickShowConfirmPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {values.showConfirmPassword ? (
                        <Visibility />
                      ) : (
                        <VisibilityOff />
                      )}
                    </IconButton>
                  </InputAdornment>
                )
              }}
            />
          </Grid>
          <Grid item>
            <Button
              style={{
                marginTop: 16,
                padding: 5,
                fontSize: 22,
                borderRadius: '50px',
                width: '260px'
              }}
              type='submit'
              color='primary'
              variant='contained'
              onClick={onSubmit}
            >
              Submit
            </Button>
          </Grid>
          <Grid item>
            <Typography style={{ padding: 5, fontSize: 16 }}>
              <Link className={classes.link} to='/'>
                Go back
              </Link>
            </Typography>
          </Grid>
        </Grid>
      </form>
    </main>
  )
}
