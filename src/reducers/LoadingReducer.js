/** @format */

export default function(state = false, action) {
  switch (action.type) {
    case 'SET_LOADING':
      return action.payload;
  }
  return state;
}
