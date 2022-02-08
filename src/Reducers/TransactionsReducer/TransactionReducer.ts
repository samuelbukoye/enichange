import { ActionTypes } from '../types';

const INITIAL_STATE: any[] = [];
const TransactionsReducer = (state = INITIAL_STATE, action: ActionTypes) => {
  switch (action.type) {
    case 'TRANSACTIONS':
      return action.payload;
    default:
      return state;
  }
};

export default TransactionsReducer;
