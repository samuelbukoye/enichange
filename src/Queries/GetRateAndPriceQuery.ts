import axios from 'axios';
import { store } from '../store';
import { Url } from '../utils';

interface PropsArgs {
  sendAmount: number;
  sendCurrency: string;
  receiveCurrency: string;
}

export const GetRateAndPriceQuery = async (props: PropsArgs) => {
  const { sendAmount, sendCurrency, receiveCurrency } = props;
  const url = `${Url}/getRateAndPrice`;
  const token = await store.getState().TokenReducer;

  try {
    console.log({ url, props, token });
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
