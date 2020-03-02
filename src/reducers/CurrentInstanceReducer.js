/** @format */

export default function(state = null, action) {
    switch (action.type) {
      case 'INSTANCE_CHANGED':
        return action.payload
    }
    return state
  }