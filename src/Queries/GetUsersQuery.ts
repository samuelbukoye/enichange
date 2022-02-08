import axios from 'axios';
import { store } from '../store';
import { Url } from '../utils';

export const GetUsersQuery = async () => {
  const url = `${Url}/users`;
  const token = await store.getState().TokenReducer;

  try {
    console.log({ url });
    const data = await axios.get(url, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return data;
  } catch (err) {
    throw err;
  }
};
