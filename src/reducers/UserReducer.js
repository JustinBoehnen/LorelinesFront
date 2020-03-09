/** @format */

export default function(state = {}, action) {
  switch (action.type) {
    case 'USER_SET':
      return action.payload;
    default:
      break;
  }
  return state;
}
