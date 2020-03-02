/** @format */
import axios from 'axios'

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

export const setInstance = instanceId => {
  console.log('set instance to: ', instanceId)
  return {
    type: 'INSTANCE_CHANGED',
    payload: instanceId
  }
}
// export function setInstance(lorelineId, entityId, instanceId)
// {
//   axios
//   .get(
//     `https://lorelines-expressapi.herokuapp.com/api/lorelines/${lorelineId}/entities/${entityId}/instances/${instanceId}`
//   )
//   .then(res => {
//     const instance = res.data
//     console.log('set instance to: ', instance)
//     return {
//       type: 'INSTANCE_CHANGED',
//       payload: instance
//     }
//   })
  
// }

export const setEntity = entityId => {
  console.log('set entity to: ', entityId)
  return {
    type: 'ENTITY_CHANGED',
    payload: entityId
  }
}