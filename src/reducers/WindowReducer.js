/** @format */
//******************************************************************************
// Window Reducer
// Matching Function(s) in src/actions/index.js:
// setWindowWidth(width), setWindowHeight(height)
//
export default function(state = { width: 100, height: 100 }, action) {
  switch (action.type) {
    case 'SET_WINDOW_HEIGHT':
      return { width: state.width, height: action.payload };
    case 'SET_WINDOW_WIDTH':
      return { width: action.payload, height: state.height };
    default:
      break;
  }
  return state;
}
