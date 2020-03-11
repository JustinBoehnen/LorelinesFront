/** @format */

export const setUser = user => {
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

export const setLorelineArray = lorelineArray => {
  return {
    type: 'SET_LORELINE_ARRAY',
    payload: lorelineArray
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
