import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { TFI, TFSpan } from '../../Routes/UserPage/UserPage.styles';
import { store } from '../../store';
import {
  LogoutButton,
  Nav,
  NavDiv,
  NavDivP,
  NavDivPA,
  NavH2,
} from './Navbar.styles';

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLoggedIn] = useState(store.getState().TokenReducer);

  const checkActive = (fd: any) => {
    return true;
  };

  const onLogout = () => {
    dispatch({
      type: 'LOGOUT',
    });
    navigate('/login');
  };

  return (
    <Nav>
      <NavH2>SimbaProject</NavH2>
      {isLoggedIn ? (
        <NavDiv>
          <NavDivP active={checkActive('/')}>
            <NavDivPA to="/">Home</NavDivPA>
          </NavDivP>
          <NavDivP active={checkActive('/transaction')}>
            <NavDivPA to="/transaction">New Transaction</NavDivPA>
          </NavDivP>
          <LogoutButton onClick={onLogout}>
            <TFSpan>Logout</TFSpan>
            <TFI className={`fa fa-sign-out`} aria-hidden="true"></TFI>
          </LogoutButton>
        </NavDiv>
      ) : (
        <NavDiv>
          <NavDivP active={checkActive('/')}>
            <NavDivPA to="/login">Login</NavDivPA>
          </NavDivP>
          <NavDivP active={checkActive('/transaction')}>
            <NavDivPA to="/signup">Signup</NavDivPA>
          </NavDivP>
        </NavDiv>
      )}
    </Nav>
  );
};

export default Navbar;
