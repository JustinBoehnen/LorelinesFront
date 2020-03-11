/** @format */

export default function(state = null, action) {
  switch (action.type) {
    case 'LORELINE_CHANGED':
      return action.payload
    default:
      break
  }
  return state
}
