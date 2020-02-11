import React from 'react'
import {
  makeStyles,
  Grid,
  Typography,
  Drawer,
  Button,
  List,
  Divider,
  ListItem,
  ListItemText,
  ListItemIcon
} from '@material-ui/core'

import FontDownloadIcon from '@material-ui/icons/FontDownloadOutlined'
import FormatListNumbered from '@material-ui/icons/FormatListNumberedOutlined'
import FlightTakeoffOutlined from '@material-ui/icons/FlightTakeoffOutlined'
import CallMade from '@material-ui/icons/CallMadeOutlined'

const drawerWidthExpanded = 240
const drawerWidthCondensed = 58

const useStyles = makeStyles({
  list: {
    width: 250
  },
  fullList: {
    width: 'auto'
  }
})
export default function Timeline() {
  const classes = useStyles()
  const [state, setState] = React.useState({
    right: false
  })

  const toggleDrawer = (side, open) => event => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return
    }

    setState({ ...state, [side]: open })
  }

  const sideList = side => (
    <div
      className={classes.list}
      role='presentation'
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List>
        <ListItem button key='Event Node'>
          <ListItemIcon>
            <FontDownloadIcon color='secondary' />
          </ListItemIcon>
          <ListItemText primary='Event Node' />
        </ListItem>
        <ListItem button key='Branching Event Node'>
          <ListItemIcon>
            <FormatListNumbered color='secondary' />
          </ListItemIcon>
          <ListItemText primary='Branching Event Node' />
        </ListItem>
        <ListItem button key='Teather'>
          <ListItemIcon>
            <CallMade color='secondary' />
          </ListItemIcon>
          <ListItemText primary='Teather' />
        </ListItem>
        <ListItem button key='Warp Node'>
          <ListItemIcon>
            <FlightTakeoffOutlined color='secondary' />
          </ListItemIcon>
          <ListItemText primary='Warp Node' />
        </ListItem>
      </List>
    </div>
  )

  return (
    <main className={classes.root}>
      <Grid
        style={{ height: '70vh', width: '70vw', textAlign: 'center' }}
        direction='row'
        justify='center'
        alignItems='center'
        container
      >
        <Grid item>
          <Typography>Canvas and Drag/Drop Components in progress</Typography>
        </Grid>
      </Grid>
<<<<<<< HEAD

      <div>
        <Button onClick={toggleDrawer('right', true)}>Open Components</Button>
        <Drawer
          anchor='right'
          open={state.right}
          onClose={toggleDrawer('right', false)}
        >
          {sideList('right')}
        </Drawer>
      </div>
    </main>
  )
}
=======
      <div>
        <Drawer
          className={classes.drawer}
          variant="permanent"
          anchor='right'

        >
          <div className={classes.toolbar}>
          </div>
          <List>
            <ListItem button key='Event Node'>
              <ListItemIcon>
                <FontDownloadIcon color='secondary' />
              </ListItemIcon>
              <ListItemText primary='Event Node' />
            </ListItem>
            <ListItem button key='Branching Event Node'>
              <ListItemIcon>
                <FormatListNumbered color='secondary' />
              </ListItemIcon>
              <ListItemText primary='Branching Node' />
            </ListItem>
            <ListItem button key='Teather'>
              <ListItemIcon>
                <CallMade color='secondary' />
              </ListItemIcon>
              <ListItemText primary='Teather' />
            </ListItem>
            <Divider />
            <ListItem button key='Warp Node'>
              <ListItemIcon>
                <FlightTakeoffOutlined color='secondary' />
              </ListItemIcon>
              <ListItemText primary='Warp Node' />
            </ListItem>
          </List>
        </Drawer>
      </div>
    </main>
  );
}
>>>>>>> 3e77d291c39fac523f73ea4b3615c0c82f428958
