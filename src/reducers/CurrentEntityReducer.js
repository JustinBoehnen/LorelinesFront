/** @format */

export default function(state = null, action) {
    switch (action.type) {
      case 'ENTITY_CHANGED':
        return action.payload
    }
    return state
  }