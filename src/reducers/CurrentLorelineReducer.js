/** @format */
//******************************************************************************
// Current Loreline Reducer
// Matching Function(s) in src/actions/index.js:
// setLoreline(lorelineId)
//
export default function(state = null, action) {
  switch (action.type) {
    case 'LORELINE_CHANGED':
      return action.payload
    default:
      break
  }
  return state
}
