import axios from 'axios';
import { Url } from '../utils';

interface PasswordProp {
  password: string;
}
interface UsernameWithPassword extends PasswordProp {
  userName: string;
  email?: never;
}
interface EmailWithPassword extends PasswordProp {
  userName?: never;
  email: string;
}
type PropsArgs = UsernameWithPassword | EmailWithPassword;

export const LoginQuery = async (props: PropsArgs) => {
  const { email, password, userName } = props;
  const url = `${Url}/login`;

  try {
    console.log({ url, props });
    const data = await axios.post(url, {
      userName,
      email,
      password,
    });
    return data;
  } catch (err) {
    throw err;
  }
};
