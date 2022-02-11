import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { TFI, TFSpan } from '../../Routes/UserPage/UserPage.styles';
import { store } from '../../store';
import {
  LogoutButton,
  LogoutButtonMin,
  Nav,
  NavButton,
  NavDiv,
  NavDivInnerMin,
  NavDivMin,
  NavDivP,
  NavDivPA,
  NavDivPAMin,
  NavDivPMin,
  NavH2,
} from './Navbar.styles';

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showNav, setShowNav] = useState(false);
  const [isLoggedIn] = useState(store.getState().TokenReducer);

  const onLogout = () => {
    dispatch({
      type: 'LOGOUT',
    });
    navigate('/login');
  };

  return (
    <Nav>
      <NavH2>ENICHANGE</NavH2>
      {isLoggedIn ? (
        <NavDiv>
          <NavDivP>
            <NavDivPA to="/">Home</NavDivPA>
          </NavDivP>
          <NavDivP>
            <NavDivPA to="/transaction">New Transaction</NavDivPA>
          </NavDivP>
          <LogoutButton onClick={onLogout}>
            <TFSpan>Logout</TFSpan>
            <TFI className={`fa fa-sign-out`} aria-hidden="true"></TFI>
          </LogoutButton>
        </NavDiv>
      ) : (
        <NavDiv>
          <NavDivP>
            <NavDivPA to="/login">Login</NavDivPA>
          </NavDivP>
          <NavDivP>
            <NavDivPA to="/signup">Signup</NavDivPA>
          </NavDivP>
        </NavDiv>
      )}
      <NavButton onClick={() => setShowNav(!showNav)}>
        <div></div>
        <div></div>
        <div></div>
      </NavButton>
      <NavDivMin>
        {isLoggedIn
          ? showNav && (
              <NavDivInnerMin>
                <NavDivPMin>
                  <NavDivPAMin to="/">Home</NavDivPAMin>
                </NavDivPMin>
                <NavDivPMin>
                  <NavDivPAMin to="/transaction">New Transaction</NavDivPAMin>
                </NavDivPMin>
                <LogoutButtonMin onClick={onLogout}>
                  <TFSpan>Logout</TFSpan>
                  <TFI className={`fa fa-sign-out`} aria-hidden="true"></TFI>
                </LogoutButtonMin>
              </NavDivInnerMin>
            )
          : showNav && (
              <NavDivInnerMin>
                <NavDivPMin>
                  <NavDivPAMin to="/login">Login</NavDivPAMin>
                </NavDivPMin>
                <NavDivPMin>
                  <NavDivPAMin to="/signup">Signup</NavDivPAMin>
                </NavDivPMin>
              </NavDivInnerMin>
            )}
      </NavDivMin>
    </Nav>
  );
};

export default Navbar;
