import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  padding: 0px 20px;

  @media screen and (max-width: 600px) {
    /* flex-direction: column; */
    padding: 0px 10px;
  }
  @media screen and (max-width: 500px) {
    background: #06063d;
  }
`;
export const NavH2 = styled.h2`
  font-size: 32px;
  width: max-content;
  padding-right: 5px;
  color: green;
  @media screen and (max-width: 996px) {
    font-size: 20px;
  }
  @media screen and (max-width: 600px) {
    align-self: flex-start;
    font-size: 20px;
  }
  @media screen and (max-width: 500px) {
    color: white;
  }
`;
export const NavDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1em;
  justify-items: center;
  align-items: center;
  grid-auto-rows: 30px;

  @media screen and (max-width: 996px) {
  }
  @media screen and (max-width: 600px) {
    grid-gap: 0.7em;
  }

  @media screen and (max-width: 500px) {
    display: none;
  }
`;
export const NavDivP = styled.p``;
export const NavDivPA = styled(NavLink)`
  text-decoration: none;
  padding: 5px;
  font-size: 18px;
  color: rgb(49, 107, 170);

  :hover {
    font-size: 18.5;
    color: rgb(18, 79, 145);
  }
  @media screen and (max-width: 996px) {
    font-size: 16px;
    :hover {
      font-size: 16.5;
    }
  }
  @media screen and (max-width: 600px) {
    font-size: 14px;
    :hover {
      font-size: 14.5;
    }
  }
`;

export const LogoutButton = styled.button`
  display: flex;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  text-transform: uppercase;
  padding: 0.5em 1em;
  margin-left: 5px;
  height: min-content;
  color: darkblue;
  background-color: pink;
  border: none;
  border-radius: 5px;
  box-shadow: 1px 0px 2px #453a80, 0.5px 0px 1px #262041;

  :hover {
    box-shadow: 0.5px 0px 1px #262041;
  }
`;
export const NavButton = styled.div`
  @media (min-width> 500px) {
    display: none;
  }
  display: block;
  width: 40px;
  margin-right: 10px;

  div {
    height: 5px !important;
    background: white;
    margin: 5px 0px;
    border-radius: 25px;
  }
  :hover {
    div {
      height: 6px !important;
    }
  }
`;
export const NavDivMin = styled.div`
  background: #06063d;
  @media (min-width> 500px) {
    display: none;
  }
  width: 50%;
  position: absolute;
  z-index: 1000;
  right: 0;
  top: 55px;
`;

export const NavDivInnerMin = styled.div``;
export const NavDivPMin = styled.p`
  border-top: 1px solid #272774;
  margin: 0;
`;
export const NavDivPAMin = styled(NavLink)`
  text-decoration: none;
  display: block;
  font-size: 15px;
  font-weight: bold;
  color: whitesmoke;
  padding: 13px 10px;
  :hover {
    font-size: 16px;
  }
`;

export const LogoutButtonMin = styled.button`
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  font-weight: bold;
  width: 100%;
  height: 40px;
  color: whitesmoke;
  border: none;
  background-color: darkred;

  :hover {
    font-size: 16px;
  }
`;
