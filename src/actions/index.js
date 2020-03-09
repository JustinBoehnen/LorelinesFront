/** @format */
import axios from 'axios'

const apiUrl = 'https://lorelines-expressapi.herokuapp.com/api/lorelines';

export const setUser = user => {
  console.log('set user to: ', user.name)
  return {
    type: 'USER_SET',
    payload: user
  }
}

export const setLoreline = lorelineId => {
  return {
    type: 'LORELINE_CHANGED',
    payload: lorelineId
  }
}

export const setLoading = isLoading => {
  return {
    type: 'SET_LOADING',
    payload: isLoading
  }
}

export const setTheme = theme => {
  return {
    type: 'SET_THEME',
    payload: theme
  }
}

export const setWindowWidth = width => {
  return {
    type: 'SET_WINDOW_WIDTH',
    payload: width
  }
}

export const setWindowHeight = height => {
  return {
    type: 'SET_WINDOW_HEIGHT',
    payload: height
  }
}

export const setInstanceId = instanceId => {
  console.log('set instance to: ', instanceId)
  return {
    type: 'INSTANCEID_CHANGED',
    payload: instanceId
  }
}

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
export const setInstanceSuccess = (instance) => {
  console.log('Should be instance object: ', instance)
  return {
    type: 'INSTANCE_CHANGED',
    payload: instance
  }
};

export const setEntityId = entityId => {
  console.log('set entity to: ', entityId)
  return {
    type: 'ENTITY_CHANGED',
    payload: entityId
  }
}

export const setDirectory = directory => {
  console.log ('set directory to: ', directory)
  return {
    type: 'DIRECTORY_CHANGED',
    payload: directory
  }
}