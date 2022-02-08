import axios from 'axios';
import { Url } from '../utils';

interface PropsArgs {
  password: string;
  firstName: string;
  lastName: string;
  userName: string;
  email: string;
}
export const SignupQuery = async (props: PropsArgs) => {
  const { email, password, userName, firstName, lastName } = props;
  const url = `${Url}/signup`;
  try {
    console.log({ url, props });
    const data = await axios.post(url, {
      userName,
      email,
      password,
      firstName,
      lastName,
    });
    return data;
  } catch (err) {
    throw err;
  }
};
