import { combineReducers } from 'redux';
import TokenReducer from './TokenReducer/TokenReducer';
import TransactionsReducer from './TransactionsReducer/TransactionReducer';
import UserDataReducer from './UserDataReducer/UserDataReducer';

const RootReducer = combineReducers({
  UserDataReducer,
  TokenReducer,
  TransactionsReducer,
});

export default RootReducer;
