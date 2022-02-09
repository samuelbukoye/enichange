import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const UserPageWrapper = styled.main`
  padding: 0 2em 2em;
  /* box-shadow: 4px 4px 10px #453a80, 2px 2px 5px #262041; */
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
`;

export const BalanceText = styled.p`
  margin-top: 1.5em;
  text-align: center;
`;

export const AccountInfoWrap = styled.div`
  margin: 1em auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1em;
`;

export const AccountInfoCard = styled.div`
  text-align: center;
  background-color: #06063d;
  color: #ffffff;
  padding: 1em 3em;
  border-radius: 10px;
`;

export const Currency = styled.h5``;

export const Balance = styled.p`
  font-size: 1.5em;
`;

// transactions header

export const UPHHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 2em;
`;

export const UPH1 = styled.h2`
  font-size: 28px;
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
  font-size: 12px;
`;

export const TransactionsCol = styled.h4`
  border-top: 1px solid #e2e0e0;
  padding: 1em;
`;

export const TransactionsCell = styled.p<{ credit?: boolean }>`
  border-top: 1px solid #e2e0e0;
  padding: 1em;

  color: ${(p) =>
    p.credit === true ? 'green' : p.credit === false ? 'red' : 'inherit'};
`;

// Transactions Footer

export const TransactionsFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: min-content;
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
`;

export const TFSpan = styled.span`
  padding-right: 0.5em;
`;

export const TFI = styled.i``;
