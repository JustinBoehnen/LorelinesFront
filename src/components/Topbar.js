import clsx from 'clsx'
import React from 'react'
import {
  AppBar,
  Toolbar,
  makeStyles,
  IconButton,
  Button
} from '@material-ui/core'
import { Menu } from '@material-ui/icons'

const drawerWidthExpanded = 240

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex'
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    marginLeft: drawerWidthExpanded,
    width: `calc(100% - ${drawerWidthExpanded}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginRight: 36
  },
  hide: {
    display: 'none'
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    ...theme.mixins.toolbar
  },
  logo: {
    fill: '#fff',
    height: 50
  },
  orange: {
    fill: theme.palette.primary.main
  },
  logout: {
    color: theme.palette.primary.main,
    backgroundColor: 'white',
    fontSize: 14,
    fontWeight: 'bolder',
    marginLeft: 'auto',
    marginRight: 0,
    '&:hover': {
      backgroundColor: 'black',
      color: theme.palette.primary.main
    }
  }
}))

export default function Topbar(props) {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <AppBar
        position='fixed'
        className={clsx(classes.appBar, {
          [classes.appBarShift]: props.drawerOpen
        })}
      >
        <Toolbar>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            onClick={() => props.setDrawerOpen(true)}
            edge='start'
            className={clsx(
              classes.menuButton,
              props.drawerOpen && classes.hide
            )}
          >
            <Menu />
          </IconButton>
          <svg
            className={classes.logo}
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 41.17 41.17'
          >
            <g id='Layer_2' data-name='Layer 2'>
              <g id='Layer_1-2' data-name='Layer 1'>
                <circle className='cls-1' cx='20.58' cy='20.58' r='20.58' />
                <path
                  className={classes.orange}
                  d='M16.76,13.22a.46.46,0,0,0,.74-.12l1.21-2.4a1.51,1.51,0,0,0-.91-2.11A1.55,1.55,0,0,0,16,9.43l-.86,1.71a.46.46,0,0,0,.09.54Z'
                />
                <path
                  className={classes.orange}
                  d='M13.08,16.61a.47.47,0,0,0-.75.13L5.46,30.47a1.51,1.51,0,0,0,1.15,2.16,1.54,1.54,0,0,0,1.57-.87l6.53-13.07a.47.47,0,0,0-.09-.54Z'
                />
                <path
                  className={classes.orange}
                  d='M34.56,8.53A1.55,1.55,0,0,0,33,9.41L26.46,22.48a.46.46,0,0,0,.09.53l1.54,1.54a.46.46,0,0,0,.75-.12L35.71,10.7A1.51,1.51,0,0,0,34.56,8.53Z'
                />
                <path
                  className={classes.orange}
                  d='M24.41,28a.46.46,0,0,0-.75.12l-1.2,2.4a1.51,1.51,0,0,0,.91,2.11,1.55,1.55,0,0,0,1.81-.84L26,30a.46.46,0,0,0-.09-.54Z'
                />
                <path
                  className={classes.orange}
                  d='M10.81,8.68a1.51,1.51,0,0,0-2.13,2.13L30.36,32.48a1.5,1.5,0,0,0,2.12-2.12Z'
                />
              </g>
            </g>
          </svg>
          <svg
            className={classes.logo}
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 168.56 43.24'
          >
            <g id='Layer_2' data-name='Layer 2'>
              <g id='Layer_1-2' data-name='Layer 1'>
                <path
                  className='cls-1'
                  d='M21.74,35.33c-6.19,0-11.95,4-15.55,4-.72,0-.92-.48-.92-1C5.27,27.81,21.54,4.2,31.73,4.2c1.28,0,1.8.52,1.8,1.35,0,3.28-8.11,11.31-13.31,11.31-.76,0-.92-.68-1.28-.68s-.36.84-.36,1.08c0,2.56,1.92,3.12,3.88,3.12,6.27,0,15.78-10.19,15.78-16.14C38.24,1.76,36.61,0,32.37,0,15.71,0,0,29.41,0,39c0,2.64,2.76,4.2,5.63,4.2,6.44,0,11.11-3,16.59-3a1.94,1.94,0,0,0,2-2A2.57,2.57,0,0,0,21.74,35.33Z'
                />
                <path
                  className='cls-1'
                  d='M88.64,36.53c-1.12,0-1.6.52-2.6.52-1.68,0-2.32-1.6-2.32-4a25.51,25.51,0,0,1,.64-5.12C93.15,25.42,99,18.1,99,13.19c0-2.72-1.76-4.68-5.84-4.68-5.83,0-11.86,9.23-14.14,17.87l-1.68.24a.77.77,0,0,0-.38.1c-.62-.9-2.08-1.5-4.66-1.5a13.2,13.2,0,0,0-7.6,2.42,5.59,5.59,0,0,1-2.31.81c-2.83,0-.72-2.51-4.15-2.51s-7.48,5.11-8,5.11h0c-.08,0-.12-.08-.12-.2a12.1,12.1,0,0,0,.88-3.92c0-.91-.28-1.63-1.12-1.63C48,25.3,44,29.41,39.36,29.41h0a8.15,8.15,0,0,1-8,7.16c-1.36,0-1.76-.76-1.76-1.6,0-3.76,5.92-6,10.91-6.4.64-.2,1.32-1.75,1.32-2.87,0-.64-.2-1.12-.76-1.16s-.88,0-1.32,0c-8.35,0-15,6.87-15,11.63,0,2.55,1.92,4.47,6.43,4.47,5.44,0,11.19-3.39,11.51-7.59A5.54,5.54,0,0,0,46,30.53a1.21,1.21,0,0,1,.36,1c0,1.76-1.8,6.51-1.8,7.27,0,1,1.6,1.36,3.24,1.36,1.87,0,2-1.16,2.83-2.2,1-1.63,4.2-6.39,6-6.39.8,0,1.24.84,2.32.84a6.74,6.74,0,0,0,1.74-.26,7.57,7.57,0,0,0-.86,3.34c0,2.87,2.19,5.27,7.43,5.27,4.39,0,9.11-2,9.11-4.71,0-.6-.44-1-1.24-1-1.48,0-2.4,1.72-5.31,1.72-3.48,0-3.48-1-3.48-1,5.33-.66,10.1-4.33,10.84-7.15a2,2,0,0,0,.91.19h.32a21.72,21.72,0,0,0-.4,4.12c0,4.56,1.76,7.91,6.11,7.91,2.28,0,5.36-1.44,5.36-3.31C89.48,36.81,89.32,36.53,88.64,36.53ZM91.2,12.27c1,0,1.59,1,1.59,2.44,0,2.63-2,6.91-7.51,9.63C87.08,18.26,89.92,12.27,91.2,12.27ZM66,32.69c-.32,0-.4-.16-.4-.4,0-1.88,3.24-4,4.88-4,.56,0,1.11.12,1.11.6C71.61,30.33,68,32.69,66,32.69Z'
                />
                <path
                  className='cls-1'
                  d='M101.23,35.05c-1.16,0-.92.84-2.48.84s-2.32-1.32-2.32-2.8c0-1.64,1.68-5.24,1.68-5.88a.75.75,0,0,0-.84-.71,13.7,13.7,0,0,0-4.12,1.11c-1.15,1.76-1.91,6.44-1.91,8.56,0,3.11,2.23,4.31,4.59,4.31,3.12,0,6.72-2.08,6.72-4.51A1.22,1.22,0,0,0,101.23,35.05Z'
                />
                <path
                  className='cls-1'
                  d='M162.61,28.89a27.75,27.75,0,0,0-4,.32,5.25,5.25,0,0,0-5-3.95c-5.48,0-14.79,11.71-20.38,11.71-1.44,0-1.64-.64-1.64-1a.49.49,0,0,1,0-.2c5.79-.72,11-5,11-7.88,0-1.51-1.44-2.67-5-2.67-6.41,0-11.31,4.63-12.25,8.81-1,.29-3.2,1.58-4.69,1.58-1,0-1-.84-1-1.28,0-1.32.72-2.12.72-3.6s-1.36-1.92-2.76-1.92c-3,0-7.55,3.68-8.19,3.68a.33.33,0,0,1-.32-.36c0-.6.84-2.12.84-3.44,0-1.16-.68-2.15-3.16-2.15C101,26.54,101,30,101,30c0,.72.36,1.48,1.08,1.48s1.55-.64,2.47-.64a1.44,1.44,0,0,1,1.64,1.52c0,1.76-1.8,5-1.8,6.23,0,1,1.08,1.36,1.88,1.36a2.5,2.5,0,0,0,1.56-.56c.56-.48,5.4-5,6.24-5s.83.4.83,1c0,3,.12,4.47,2.6,4.47a13.56,13.56,0,0,0,7.86-3.05c.61,2.24,2.86,3.93,7.25,3.93,8.51,0,16.5-10.95,19.06-10.95a3.34,3.34,0,0,1,2,.56c-4.84,1.52-9,4-9,7.2,0,1.55,1.44,2.71,4.63,2.71,6.88,0,9.79-4.51,9.79-8.59v0c2.68.24,5.44,1.2,5.44,3.32,0,.4-.08.72-.08,1s.2.4.48.4c1.12,0,3.71-1.68,3.71-3.6S166.61,28.89,162.61,28.89Zm-31.69,3.4c0-1.88,3.24-4,4.87-4,.56,0,1.12.12,1.12.6,0,1.44-3.63,3.8-5.59,3.8C131,32.69,130.92,32.53,130.92,32.29Zm20.34,3.48c-.68,0-1-.36-1-.8,0-1.48,2-2.6,4.36-3.12a3.33,3.33,0,0,1,.12.88C154.78,34.25,153.66,35.77,151.26,35.77Z'
                />
              </g>
            </g>
          </svg>
          <Button className={classes.logout}>Log Out</Button>
        </Toolbar>
      </AppBar>
      <div className={classes.toolbar} />
    </div>
  )
}
