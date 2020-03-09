/** @format */

export default function(state = {}, action) {
  switch (action.type) {
    case 'DIRECTORY_CHANGED':
      return action.payload;
    default:
      break;
  }
  return state;
}
