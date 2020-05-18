/** @format */
//******************************************************************************
// Axios Instance Reducer
// Matching Function(s) in src/actions/index.js:
// setInstance(lorelineId, entityId, instanceId), setInstanceSuccess(instance)
//
export default function(state = null, action) {
    switch (action.type) {
      case 'INSTANCE_CHANGED':
        return action.payload
    }
    return state
  }
  