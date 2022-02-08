import axios from 'axios';
import { store } from '../store';
import { Url } from '../utils';

type PropsArgs = {
  receiverUserName: string;
  sendAmount: number;
  sendCurrency: string;
  receiveCurrency: string;
};

export const CreateTransactionQuery = async (props: PropsArgs) => {
  const { receiverUserName, sendAmount, sendCurrency, receiveCurrency } = props;
  const url = `${Url}/login`;
  const token = await store.getState().TokenReducer;

  try {
    console.log({ url, props });
    const data = await axios.post(
      url,
      {
        receiverUserName,
        sendAmount,
        sendCurrency,
        receiveCurrency,
      },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    return data;
  } catch (err) {
    throw err;
  }
};
