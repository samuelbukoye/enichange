import axios from 'axios';
import { store } from '../store';
import { Url } from '../utils';

export const LogoutAllQuery = async () => {
  const url = `${Url}/logout`;
  const token = await store.getState().TokenReducer;

  try {
    const data = await axios.post(url, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return data;
  } catch (err) {
    throw err;
  }
};
