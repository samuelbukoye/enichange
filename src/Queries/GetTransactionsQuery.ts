import axios from 'axios';
import { store } from '../store';
import { Url } from '../utils';

export const GetTransactionsQuery = async () => {
  const url = `${Url}/transactions`;
  const token = await store.getState().TokenReducer;

  try {
    const data = await axios.get(url, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return data;
  } catch (err) {
    throw err;
  }
};
