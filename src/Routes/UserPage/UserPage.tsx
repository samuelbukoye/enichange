import React, { useEffect, useState } from 'react';
import { store } from '../../store';
import Layout from '../../Components/Layout/Layout';
import {
  AccountInfoCard,
  AccountInfoWrap,
  Balance,
  BalanceText,
  Currency,
  TFButton,
  TFI,
  TFSpan,
  Transactions,
  TransactionsCell,
  TransactionsCol,
  TransactionsFooter,
  UPH1,
  UPHButton,
  UPHHeader,
  UPHNavLink,
  UserInfo,
  UserPageWrapper,
  Welcome,
} from './UserPage.styles';
import { GetTransactionsQuery } from '../../Queries/GetTransactionsQuery';
import { useDispatch } from 'react-redux';
import { GetUserInfoQuery } from '../../Queries/GetUserInfoQuery';

const UserPage = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [userData, setUserData] = useState(store.getState().UserDataReducer);
  const [userTransactions, setUserTransactions] = useState(
    store.getState().TransactionsReducer
  );

  const getAllUserInfo = async () => {
    setIsLoading(true);
    try {
      const userResponse = await GetUserInfoQuery();
      const transactionResponse = await GetTransactionsQuery();
      setUserData(userResponse.data);
      setUserTransactions(transactionResponse.data);
      dispatch({
        type: 'USER',
        payload: userResponse.data,
      });
      dispatch({
        type: 'TRANSACTIONS',
        payload: transactionResponse.data,
      });
      setIsLoading(false);
    } catch (e) {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getAllUserInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const formatDate = (datestring: Date) => {
    var d = new Date(datestring);
    var months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    const year = d.getFullYear();
    const month = months[d.getMonth()];
    const day = d.getDate();
    const hour = d.getHours();
    const minute = d.getMinutes();

    return `${month} ${day}, ${year} ${hour}:${minute}`;
  };

  const getUserName = (userName: string) =>
    userName === userData.userName ? 'You' : userName;
  return (
    <Layout>
      <UserPageWrapper>
        {/* User Info */}
        <UserInfo>
          {/* Transactions Footer */}
          <TransactionsFooter>
            <Welcome>Welcome Back {userData.userName}</Welcome>
            <TFButton onClick={getAllUserInfo}>
              <TFSpan>Refresh</TFSpan>
              <TFI
                className={`fa  fa-refresh ${isLoading && 'fa-spin'}`}
                aria-hidden="true"
              ></TFI>
            </TFButton>
          </TransactionsFooter>
          <BalanceText>Your Balance</BalanceText>
          <AccountInfoWrap>
            <AccountInfoCard>
              <Currency>Pounds</Currency>
              <Balance>&#8358;{userData.GBP.toFixed(2)}</Balance>
            </AccountInfoCard>
            <AccountInfoCard>
              <Currency>USDollars</Currency>
              <Balance>&#36;{userData.USD.toFixed(2)}</Balance>
            </AccountInfoCard>
            <AccountInfoCard>
              <Currency>Euros</Currency>
              <Balance>&euro;{userData.EUR.toFixed(2)}</Balance>
            </AccountInfoCard>
          </AccountInfoWrap>
        </UserInfo>
        {/* Transactions Header */}
        <UPHHeader>
          <UPH1>Transactions</UPH1>
          <UPHButton>
            <UPHNavLink to="/transaction">
              <TFSpan>New Transaction</TFSpan>
              <TFI className="fa  fa-plus" aria-hidden="true"></TFI>
            </UPHNavLink>
          </UPHButton>
        </UPHHeader>

        {/* Transactions Section */}
        <Transactions>
          {/* Transactions Head */}
          <TransactionsCol>ID</TransactionsCol>
          <TransactionsCol>From</TransactionsCol>
          <TransactionsCol>To</TransactionsCol>
          <TransactionsCol>Value</TransactionsCol>
          <TransactionsCol>Currency</TransactionsCol>
          <TransactionsCol>Created At</TransactionsCol>
          <TransactionsCol>Updated At</TransactionsCol>
          {/* Transactions  */}
          {userTransactions
            .map((transaction: any, index: number) => (
              <>
                <TransactionsCell>{index + 1}</TransactionsCell>
                <TransactionsCell>
                  {getUserName(transaction.senderUserName)}
                </TransactionsCell>
                <TransactionsCell>
                  {getUserName(transaction.receiverUserName)}
                </TransactionsCell>
                <TransactionsCell credit={transaction.credit}>
                  {transaction.credit
                    ? `+${transaction.receiveAmount}`
                    : `+${transaction.sendAmount}`}
                </TransactionsCell>
                <TransactionsCell>
                  {transaction.credit
                    ? `${transaction.receiveCurrency}`
                    : `${transaction.sendCurrency}`}
                </TransactionsCell>
                <TransactionsCell>
                  {formatDate(transaction.createdAt)}
                </TransactionsCell>
                <TransactionsCell>
                  {formatDate(transaction.updatedAt)}
                </TransactionsCell>
              </>
            ))
            .reverse()}
        </Transactions>
      </UserPageWrapper>
    </Layout>
  );
};

export default UserPage;
