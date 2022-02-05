import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Routes/Login/Login';
import Transaction from './Routes/Transaction/Transaction';
import Signup from './Routes/Signup/Signup';
import UserPage from './Routes/UserPage/UserPage';
import NotFound from './Routes/NotFound/NotFound';

const Start = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserPage />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="transaction" element={<Transaction />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Start;
