import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const UserPageWrapper = styled.main`
  padding: 0 2em 2em;
  width: 100%;
  @media (max-width: 500px) {
    padding: 0 0.5em 0.5em;
  }
`;

// Header

// User Info

export const UserInfo = styled.section`
  width: 100%;
  position: relative;
  /* left: -2em; */
  /* background-color: #06063d; */
  /* color: #ffffff; */
  color:black
  padding: 2em;
  `;

export const Welcome = styled.h3`
  font-size: 1.5em;
  color: darkblue;
  @media (max-width: 500px) {
    font-size: 1.1em;
  }
  @media (max-width: 350px) {
    text-align: center;
  }
`;

export const BalanceText = styled.h2`
  margin-top: 1.5em;
  text-align: center;
  font-size: 1.5em;
  color: darkblue;

  @media (max-width: 500px) {
    font-size: 1.1em;
  }
`;

export const AccountInfoWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  @media (max-width: 650px) {
  }
`;

export const AccountInfoCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #06063d;
  color: #ffffff;
  /* padding: 1em 3em; */
  margin: 1em;
  width: 250px;
  height: 180px;
  border-radius: 10px;

  @media (max-width: 650px) {
    margin: 0.5em;
    width: 150px;
    height: 120px;
  }
  @media (max-width: 500px) {
    margin: 0.2em;
    width: 100px;
    height: 80px;
  }
  @media (max-width: 250px) {
    margin: 0.1em;
    width: 80px;
    height: 70px;
  }
`;

export const Currency = styled.h5`
  font-size: 1.5em;
  margin-bottom: 15px;
  @media (max-width: 650px) {
    font-size: 1.1em;
    margin-bottom: 8px;
  }
  @media (max-width: 500px) {
    font-size: 0.8em;
    margin-bottom: 5px;
  }
  @media (max-width: 250px) {
    font-size: 0.5em;
  }
`;

export const Balance = styled.p`
  font-size: 1.5em;
  margin-top: 0px;
  @media (max-width: 650px) {
    font-size: 1.1em;
  }
  @media (max-width: 500px) {
    font-size: 0.8em;
  }
  @media (max-width: 250px) {
    font-size: 0.5em;
  }
`;

// transactions header

export const UPHHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 2em;
  @media (max-width: 350px) {
    display: block;
  }
`;

export const UPH1 = styled.h2`
  font-size: 1.5em;
  color: darkblue;

  @media (max-width: 500px) {
    font-size: 1.1em;
  }
  @media (max-width: 350px) {
    text-align: center;
  }
`;

export const UPHButton = styled.button`
  font-size: 12px;
  text-decoration: none;
  color: #ffffff;
  background-color: #3636dd;
  border: none;
  border-radius: 5px;
  padding: 0;
  display: flex;
  align-items: center;
  box-shadow: 1px 0px 2px #453a80, 0.5px 0px 1px #262041;

  :hover {
    box-shadow: 0.5px 0px 1px #262041;
  }
  @media (max-width: 500px) {
    font-size: 10px;
  }
  @media (max-width: 350px) {
    margin-left: auto;
  }
`;

export const UPHNavLink = styled(NavLink)`
  display: block;
  padding: 1em 1.5em;
  text-decoration: none;
  color: #ffffff;
  text-transform: uppercase;
`;

// Transactions

export const Transactions = styled.section`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-gap: 0.5em;
  font-size: 1em;
  @media (max-width: 650px) {
    font-size: 0.8em;
  }
  @media (max-width: 500px) {
    font-size: 0.7em;
  }
  @media (max-width: 350px) {
    font-size: 0.5em;
  }
`;

export const TransactionsCol = styled.h4`
  border-top: 1px solid #e2e0e0;
`;

export const TransactionsCell = styled.p<{ credit?: boolean }>`
  border-top: 1px solid #e2e0e0;

  color: ${(p) =>
    p.credit === true ? 'green' : p.credit === false ? 'red' : 'inherit'};
`;

// Transactions Footer

export const TransactionsFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: min-content;
  @media (max-width: 350px) {
    display: block;
  }
`;
export const TFButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  text-transform: uppercase;
  padding: 1em 1.5em;
  height: min-content;
  color: darkblue;
  background-color: lightgreen;
  border: none;
  border-radius: 5px;
  box-shadow: 1px 0px 2px #453a80, 0.5px 0px 1px #262041;

  :hover {
    box-shadow: 0.5px 0px 1px #262041;
  }
  @media (max-width: 500px) {
    font-size: 10px;
  }
  @media (max-width: 350px) {
    margin-left: auto;
  }
`;

export const TFSpan = styled.span`
  padding-right: 0.5em;
`;

export const TFI = styled.i``;
