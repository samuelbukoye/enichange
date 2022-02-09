import Login from './Routes/Login/Login';
import { store } from './store';

const PrivateRoute = (props: any) => {
  const loggedIn = store.getState().TokenReducer;

  if (loggedIn) <Login />;

  return props.children;
};
export default PrivateRoute;
