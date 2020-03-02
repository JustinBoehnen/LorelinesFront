/** @format */

import { combineReducers } from 'redux'
import UserReducer from './UserReducer'
import DirectoryReducer from './DirectoryReducer'
import WindowReducer from './WindowReducer'
import LoadingReducer from './LoadingReducer'
import ThemeReducer from './ThemeReducer'
import CurrentLorelineReducer from './CurrentLorelineReducer'
import CurrentEntityReducer from './CurrentEntityReducer'
import CurrentInstanceReducer from './CurrentInstanceReducer'

const allReducers = combineReducers({
  user: UserReducer,
  directory: DirectoryReducer,
  window: WindowReducer,
  loading: LoadingReducer,
  colorTheme: ThemeReducer,
  lorelineId: CurrentLorelineReducer,
  entityId: CurrentEntityReducer,
  instanceId: CurrentInstanceReducer
})

export default allReducers
