import axios from 'axios';
import { store } from '../store';
import { Url } from '../utils';

type PropsArgs = {
  sendAmount: number;
  sendCurrency: 'USD' | 'GBP' | 'EUR';
  receiveCurrency: 'USD' | 'GBP' | 'EUR';
};

export const GetRateAndPriceQuery = async (props: PropsArgs) => {
  const { sendAmount, sendCurrency, receiveCurrency } = props;
  const url = `${Url}/login`;
  const token = await store.getState().TokenReducer;

  try {
    console.log({ url, props });
    const data = await axios.post(
      url,
      {
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
