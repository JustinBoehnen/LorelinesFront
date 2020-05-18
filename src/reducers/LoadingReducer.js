/** @format */
//******************************************************************************
// Loading Reducer
// Matching Function(s) in src/actions/index.js:
// setLoading(isLoading)
//
export default function(state = false, action) {
  switch (action.type) {
    case 'SET_LOADING':
      return action.payload
    default:
      break
  }
  return state
}
