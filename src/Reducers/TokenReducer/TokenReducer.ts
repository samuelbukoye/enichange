import { ActionTypes } from '../types';

const INITIAL_STATE = '';
const TokenReducer = (state = INITIAL_STATE, action: ActionTypes) => {
  switch (action.type) {
    case 'TOKEN':
      return action.payload;
    default:
      return state;
  }
};

export default TokenReducer;
