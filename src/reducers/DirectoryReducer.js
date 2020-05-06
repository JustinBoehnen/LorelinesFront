/** @format */
//******************************************************************************
// Directory Reducer
// Matching Function(s) in src/actions/index.js:
// setDirectory(directory)
//
export default function(state = {}, action) {
  switch (action.type) {
    case 'DIRECTORY_CHANGED':
      return action.payload;
    default:
      break;
  }
  return state;
}
