import { Navigate } from 'react-router-dom';
import { store } from './store';

function PrivateRoute(props: any) {
  const loggedIn = store.getState().TokenReducer ? true : false;

  return loggedIn ? props.children : <Navigate to="/login" replace />;
}

export default PrivateRoute;
