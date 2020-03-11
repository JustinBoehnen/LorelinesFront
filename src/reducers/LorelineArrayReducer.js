/** @format */

export default function(state = [], action) {
  switch (action.type) {
    case 'SET_LORELINE_ARRAY':
      return action.payload
    default:
      break
  }
  return state
}
