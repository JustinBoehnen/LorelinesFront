/** @format */
//******************************************************************************
// Theme Reducer
// Matching Function(s) in src/actions/index.js:
// setTheme(theme)
//
export default function(state = 'dark', action) {
  switch (action.type) {
    case 'SET_THEME':
      return action.payload;
    default:
      break;
  }
  return state;
}
