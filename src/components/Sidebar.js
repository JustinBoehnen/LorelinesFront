import clsx from 'clsx'
import React from 'react'
import { Link } from 'react-router-dom'
import {
  Drawer,
  Divider,
  List,
  ListItem,
  makeStyles,
  ListItemIcon,
  ListItemText,
  IconButton
} from '@material-ui/core'
import {
  AccountCircle,
  LibraryAdd,
  Apps,
  Timeline,
  List as ListIcon,
  Info,
  Close
} from '@material-ui/icons'

const drawerWidthExpanded = 240
const drawerWidthCondensed = 58

const useStyles = makeStyles(theme => ({
  drawer: {
    width: drawerWidthExpanded,
    flexShrink: 0,
    whiteSpace: 'nowrap'
  },
  drawerOpen: {
    overflowX: 'hidden',
    width: drawerWidthExpanded,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    overflowX: 'hidden',
    width: drawerWidthCondensed, //theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: drawerWidthCondensed //theme.spacing(9) + 1,
    }
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar
  },
  link: {
    color: theme.palette.secondary.main,
    textDecoration: 'underline'
  }
}))

export default function Sidebar(props) {
  const classes = useStyles()

  return (
    <div>
      <Drawer
        variant='permanent'
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: props.drawerOpen,
          [classes.drawerClose]: !props.drawerOpen
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: props.drawerOpen,
            [classes.drawerClose]: !props.drawerOpen
          })
        }}
        open={props.drawerOpen}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={() => props.setDrawerOpen(false)}>
            <Close color='secondary' />
          </IconButton>
        </div>
        <Divider />
        <List>
          <Link className={classes.link} to='/app/account'>
            <ListItem button key='Account'>
              <ListItemIcon>
                <AccountCircle color='secondary' />
              </ListItemIcon>
              <ListItemText primary='Account' />
            </ListItem>
          </Link>
          <Link className={classes.link} to='/app/lorelines'>
            <ListItem button key='Lorelines'>
              <ListItemIcon>
                <Apps color='secondary' />
              </ListItemIcon>
              <ListItemText primary='Lorelines' />
            </ListItem>
          </Link>
        </List>
        <Divider />
        <List>
          <Link className={classes.link} to='/app/new'>
            <ListItem button key='New Custom Entity'>
              <ListItemIcon>
                <LibraryAdd color='secondary' />
              </ListItemIcon>
              <ListItemText primary='New Custom Entity' />
            </ListItem>
          </Link>
        </List>
        <Divider />
        <List>
          <Link className={classes.link} to='/app/timeline'>
            <ListItem button key='Timeline'>
              <ListItemIcon>
                <Timeline color='secondary' />
              </ListItemIcon>
              <ListItemText primary='Timeline' />
            </ListItem>
          </Link>
          <Link className={classes.link} to='/app/directory'>
            <ListItem button key='Directory'>
              <ListItemIcon>
                <ListIcon color='secondary' />
              </ListItemIcon>
              <ListItemText primary='Directory' />
            </ListItem>
          </Link>
        </List>
        <Divider />
        <List>
          <Link className={classes.link} to='/app/about'>
            <ListItem button key='About Lorelines'>
              <ListItemIcon>
                <Info color='secondary' />
              </ListItemIcon>
              <ListItemText primary='About Lorelines' />
            </ListItem>
          </Link>
        </List>
      </Drawer>
    </div>
  )
}
