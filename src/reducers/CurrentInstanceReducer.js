/** @format */
//******************************************************************************
// Current Instance Reducer
// Matching Function(s) in src/actions/index.js:
// setInstanceId(instanceId)
//
export default function(state = null, action) {
    switch (action.type) {
      case 'INSTANCEID_CHANGED':
        return action.payload
    }
    return state
  }