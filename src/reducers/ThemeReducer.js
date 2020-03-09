/** @format */

export default function(state = 'dark', action) {
  switch (action.type) {
    case 'SET_THEME':
      return action.payload;
    default:
      break;
  }
  return state;
}
