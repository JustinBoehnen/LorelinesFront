/** @format */

import { combineReducers } from 'redux';
import UserReducer from './UserReducer';
import DirectoryReducer from './DirectoryReducer';
import WindowReducer from './WindowReducer';

const allReducers = combineReducers({
  user: UserReducer
  //directory: DirectoryReducer,
  //window: WindowReducer
});

export default allReducers;
