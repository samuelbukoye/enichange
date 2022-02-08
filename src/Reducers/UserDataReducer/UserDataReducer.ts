import { ActionTypes } from '../types';

const INITIAL_STATE = {};
const UserDataReducer = (state = INITIAL_STATE, action: ActionTypes) => {
  switch (action.type) {
    case 'USER':
      return action.payload;
    default:
      return state;
  }
};

export default UserDataReducer;
