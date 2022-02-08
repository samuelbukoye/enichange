import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Routes/Login/Login';
import Transaction from './Routes/Transaction/Transaction';
import Signup from './Routes/Signup/Signup';
import UserPage from './Routes/UserPage/UserPage';
import NotFound from './Routes/NotFound/NotFound';
import PrivateRoute from './PrivateRoute';

const Start = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <UserPage />
            </PrivateRoute>
          }
        />
        <Route
          path="transaction"
          element={
            <PrivateRoute>
              <Transaction />
            </PrivateRoute>
          }
        />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Start;
