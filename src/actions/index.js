/** @format */
//******************************************************************************
// index.js
// Holds all the Redux functions that are used to set global Redux variables
//
//
import axios from 'axios'

const apiUrl = 'https://lorelines-expressapi.herokuapp.com/api/lorelines';

//******************************************************************************
// Set User Redux Function
// File(s) Used: App.js
export const setUser = user => {
  return {
    type: 'USER_SET',
    payload: user
  }
}

//******************************************************************************
// Set Loreline Redux Function
// File(s) Used: App.js, Lorelines.js
export const setLoreline = lorelineId => {
  return {
    type: 'LORELINE_CHANGED',
    payload: lorelineId
  }
}

//******************************************************************************
// Set Loreline Array Redux Function
// File(s) Used: Lorelines.js
export const setLorelineArray = lorelineArray => {
  return {
    type: 'SET_LORELINE_ARRAY',
    payload: lorelineArray
  }
}

//******************************************************************************
// Set Loading Redux Function
// File(s) Used: App.js, Lorelines.js, Home.js, Directory.js
export const setLoading = isLoading => {
  return {
    type: 'SET_LOADING',
    payload: isLoading
  }
}

//******************************************************************************
// Set Theme Redux Function
// File(s) Used: Account.js
export const setTheme = theme => {
  return {
    type: 'SET_THEME',
    payload: theme
  }
}

//******************************************************************************
// Set Window Width Redux Function
// File(s) Used: Home.js
export const setWindowWidth = width => {
  return {
    type: 'SET_WINDOW_WIDTH',
    payload: width
  }
}

//******************************************************************************
// Set Window Height Redux Function
// File(s) Used: Home.js
export const setWindowHeight = height => {
  return {
    type: 'SET_WINDOW_HEIGHT',
    payload: height
  }
}

//******************************************************************************
// Set Instance Id Redux Function
// Set's instance id global variable to current Id
// File(s) Used: DirectoryList.js
export const setInstanceId = instanceId => {
  console.log('set instance to: ', instanceId)
  return {
    type: 'INSTANCEID_CHANGED',
    payload: instanceId
  }
}

//******************************************************************************
// Set Instance Redux Function
// Set's instance object global variable to current instance
// File(s) Used: DirectoryList.js
export const setInstance = ( lorelineId, entityId, instanceId ) => {
  console.log('Passed in values are: ', (lorelineId, entityId, instanceId))
  return (dispatch) => {
    return axios.get(`${apiUrl}/${lorelineId}/entities/${entityId}/instances/${instanceId}`)
      .then(response => {
        dispatch(setInstanceSuccess(response.data))
      })
      .catch(error => {
        throw(error);
      });
  };
};

//******************************************************************************
// Set Instance Success Redux Function
// A function only called in dispatch to avoid sync problems
// Catches the instance from the setInstance function
// File(s) Used: N/A
export const setInstanceSuccess = (instance) => {
  console.log('Should be instance object: ', instance)
  return {
    type: 'INSTANCE_CHANGED',
    payload: instance
  }
};

//******************************************************************************
// Set Entity Id Redux Function
// File(s) Used: DirectoryList.js
export const setEntityId = entityId => {
  console.log('set entity to: ', entityId)
  return {
    type: 'ENTITY_CHANGED',
    payload: entityId
  }
}

//******************************************************************************
// Set Directory Redux Function
// File(s) Used: ???
export const setDirectory = directory => {
  console.log ('set directory to: ', directory)
  return {
    type: 'DIRECTORY_CHANGED',
    payload: directory
  }
}