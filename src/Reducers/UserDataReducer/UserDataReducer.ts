import { ActionTypes } from '../types';

const INITIAL_STATE = {};
const UserDataReducer = (state = INITIAL_STATE, action: ActionTypes) => {
  switch (action.type) {
    case 'USER':
      return action.payload;
    case 'LOGOUT':
      return {};
    default:
      return state;
  }
};

export default UserDataReducer;
