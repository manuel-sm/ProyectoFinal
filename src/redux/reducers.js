import { ADD_TASK, DELETE_TASK } from './actions.js';

const reducer = (state, { type, payload}) => {
  switch(type) {
    case ADD_TASK:
      return {
        ...state,
        task: payload
      }
    
    case DELETE_TASK:
    break;

    default:
      return state;
  }
}

export {reducer};