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
`;
export const NavH2 = styled.h2`
  font-size: 32px;
  width: 200px;
  @media screen and (max-width: 996px) {
    font-size: 20px;
  }
  @media screen and (max-width: 600px) {
    align-self: flex-start;
    font-size: 20px;
  }
`;
export const NavDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1em;
  justify-items: center;
  align-items: center;

  @media screen and (max-width: 996px) {
    height: 40px;
  }
  @media screen and (max-width: 600px) {
    height: 40px;
  }

  @media screen and (max-width: 400px) {
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: 20px;
    align-items: center;
    justify-items: start;
    height: auto;
  }
`;
export const NavDivP = styled.p<{ active?: boolean }>`
  font-size: 18px;
  color: ${(p) => (p.active ? 'rgb(165, 175, 185)' : ' rgb(49, 107, 170)')};

  :hover {
    font-size: ${(p) => (p.active ? '18' : '18.5')};
    color: ${(p) => (p.active ? 'rgb(165, 175, 185)' : 'rgb(18, 79, 145)')};
  }
  @media screen and (max-width: 996px) {
    font-size: 14px;
    :hover {
      font-size: ${(p) => (p.active ? '14' : '14.5')};
    }
  }
  @media screen and (max-width: 600px) {
    font-size: 12px;
    :hover {
      font-size: ${(p) => (p.active ? '12' : '12.5')};
    }
  }
`;
export const NavDivPA = styled(NavLink)`
  text-decoration: none;
`;

export const LogoutButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  text-transform: uppercase;
  padding: 0.2em 1em;
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
