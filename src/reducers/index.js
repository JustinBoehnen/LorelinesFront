/** @format */
//******************************************************************************
// src/reducers/index.js
// Combines individual reducer files into allReducers variable
//
//
import { combineReducers } from 'redux'
import UserReducer from './UserReducer'
import DirectoryReducer from './DirectoryReducer'
import WindowReducer from './WindowReducer'
import LoadingReducer from './LoadingReducer'
import ThemeReducer from './ThemeReducer'
import CurrentLorelineReducer from './CurrentLorelineReducer'
import LorelineArrayReducer from './LorelineArrayReducer'
import CurrentEntityReducer from './CurrentEntityReducer'
import CurrentInstanceReducer from './CurrentInstanceReducer'
import AxiosInstanceReducer from './AxiosInstanceReducer'
import TimelineReducer from './TimelineReducer'

const allReducers = combineReducers({
  user: UserReducer,
  directory: DirectoryReducer,
  window: WindowReducer,
  loading: LoadingReducer,
  colorTheme: ThemeReducer,
  lorelineId: CurrentLorelineReducer,
  lorelineArray: LorelineArrayReducer,
  entityId: CurrentEntityReducer,
  instanceId: CurrentInstanceReducer,
  instance: AxiosInstanceReducer,
  timeline: TimelineReducer,
})

export default allReducers
