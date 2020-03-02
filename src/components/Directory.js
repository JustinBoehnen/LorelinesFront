/** @format */

import React from 'react';
import {
  Grid,
  List,
  makeStyles,
  Drawer
} from '@material-ui/core';

//import AddBox from '@material-ui/icons/AddBoxOutlined';
import InstanceList from './InstanceList';
import InstancePage from './InstancePage';

const drawerWidth = 120

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  toolbar: theme.mixins.toolbar,
}));

export default function Lorelines(props) {
  const classes = useStyles();
  //const [loreLineName, setloreLineName] = useState('');
  // const [submitAttempted, setSubmitAttempted] = useState(false);
  //const [submitFailed, setSubmitFailed] = useState(false);
  // const [values, setValues] = React.useState({
  //   loreLineName: ''
  // });

  // const onLoreLineChange = e => setloreLineName(e.target.value);

  // const handleChange = prop => event => {
  //   setValues({ ...values, [prop]: event.target.value });
  // };

  // const onSubmit = async e => {
  //   e.preventDefault();
  //   setSubmitAttempted(true);

  //   if (loreLineName !== '') {
  //     let accept = await props.tryLorelineAdd(loreLineName);
  //     if (!accept) setSubmitFailed(true);
  //     return accept;
  //   } else {
  //     return false;
  //   }
  // };

  return (
      <main className={classes.root}>
        <div>
          <List
            container
            //spacing={2}
            direction="row"
            justify="flex-start"
            alignItems="center">
              <InstancePage />
          </List>
          <Drawer
          className={classes.drawer}
          variant="permanent"
          anchor="right"
          >
            <div className={classes.toolbar}></div>
            <InstanceList />
          </Drawer>
        </div>
      </main>
  );
}
