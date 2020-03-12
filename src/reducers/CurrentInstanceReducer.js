/** @format */

export default function(state = null, action) {
    switch (action.type) {
      case 'INSTANCEID_CHANGED':
        return action.payload
    }
    return state
  }