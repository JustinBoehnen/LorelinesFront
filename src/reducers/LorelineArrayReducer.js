/** @format */
//******************************************************************************
// Loreline Array Reducer
// Matching Function(s) in src/actions/index.js:
// setLorelineArray(lorelineArray)
//
export default function(state = [], action) {
  switch (action.type) {
    case 'SET_LORELINE_ARRAY':
      return action.payload
    default:
      break
  }
  return state
}
