/** @format */
//******************************************************************************
// Current Entity Reducer
// Matching Function(s) in src/actions/index.js:
// setEntityId(entityId)
//
export default function(state = null, action) {
    switch (action.type) {
      case 'ENTITY_CHANGED':
        return action.payload
    }
    return state
  }