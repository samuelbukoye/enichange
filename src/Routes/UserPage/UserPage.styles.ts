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

export const TransactionsCell = styled.p`
  border-top: 1px solid #e2e0e0;
  padding: 1em;
`;

// Transactions Footer

export const TransactionsFooter = styled.footer`
  display: flex;
  justify-content: flex-end;
  padding-top: 1em;
`;
export const TFButton = styled.button`
  display: flex;
  justify-content: space-around;
  font-size: 12px;
  text-transform: uppercase;
  padding: 0.5em 1em;
  color: 3636dd;
  background-color: inherit;
  border: 1px solid #3636dd;
  border-radius: 5px;
`;
export const TFSpan = styled.span``;

export const TFI = styled.i`
  padding-left: 0.5em;
`;
