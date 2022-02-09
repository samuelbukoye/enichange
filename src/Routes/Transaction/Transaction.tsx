import { useCallback, useEffect, useState } from 'react';
import ButtonWithLoader from '../../Components/ButtonWithLoader/ButtonWithLoader';
import Layout from '../../Components/Layout/Layout';

import { GetRateAndPriceQuery } from '../../Queries/GetRateAndPriceQuery';
import { store } from '../../store';
import { FormTitle, FormWrapper } from '../Login/Login.styles';
import { MessageStyle } from '../Signup/Signup.styles';
import { InputStyled as InputStyledLogin } from '../Login/Login.styles';
import {
  Balancep,
  BalanceP,
  InputDiv,
  InputLabel,
  InputStyled,
  ReceivedDiv,
  ReceiveAmount,
  TCRadioDiv,
  TCRadioSpan,
  TCRadioWrap,
  TCValue,
  TFCTitle,
  TFCurrency,
  TFInnerDiv,
  TFormDiv,
  UserNameDiv,
  UserNamesP,
  FormSuccess,
} from './Transaction.styles';
import { GetUsersQuery } from '../../Queries/GetUsersQuery';
import { CreateTransactionQuery } from '../../Queries/CreateTransactionQuery';
import { useDispatch } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';

const Transaction = () => {
  const navigate = useNavigate();

  const [userData] = useState(store.getState().UserDataReducer);
  const [successMessage, setSuccessMessage] = useState('');

  const [isLoading, setIsLoading] = useState(false);
  const [balance, setBalance] = useState(2345.0);
  const [sendCurrency, setSendCurrency] = useState('');
  const [receiveCurrency, setReceiveCurrency] = useState('');
  const [sendAmount, setSendAmount] = useState(5);
  const [receiveAmount, setReceiveAmount] = useState(0);
  const [sendAmountErr, setSendAmountErr] = useState('');

  const [receiverUserName, setReceiverUserName] = useState('');
  const [enchangeRate, setEnchangeRate] = useState(0);

  const [inputFocused, setInputFocused] = useState(false);
  const [filteredUserNames, setFilteredUserNames] = useState([]);
  const [userNames, setUserNames] = useState([]);
  const [userNamesSearchText, setUserNamesSearchText] = useState('');

  const getUsersInfo = async () => {
    const response = await GetUsersQuery();
    const data = await response.data;
    const users = await data.users;
    setUserNames(users);
  };

  useEffect(() => {
    getUsersInfo();
  }, []);

  const filterUsers = () => {
    const filtered = userNames.filter((user: any) =>
      user.userName.includes(userNamesSearchText)
    );
    setFilteredUserNames(filtered);
  };

  useEffect(() => {
    filterUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userNames, userNamesSearchText]);

  const setSendCurrencyValue = (curr: string) => {
    sendCurrency === curr ? setSendCurrency('') : setSendCurrency(curr);
  };
  const setReceiveCurrencyValue = (curr: string) => {
    receiveCurrency === curr
      ? setReceiveCurrency('')
      : setReceiveCurrency(curr);
  };

  const handleValueChange = useCallback(() => {
    if (sendAmount < 5) {
      setSendAmountErr('You can only send a minimum of 5 ' + sendCurrency);
      return;
    } else if (sendAmount > balance) {
      setSendAmountErr('Value to send is more than balance at ' + balance);
      return;
    }
    setSendAmountErr('');
  }, [sendAmount, balance, sendCurrency]);

  useEffect(() => {
    handleValueChange();
  }, [sendAmount, handleValueChange]);

  const getExchangeRateAndAmount = async (
    sendAmount: number,
    sendCurrency: string,
    receiveCurrency: string
  ) => {
    try {
      const data = { sendAmount, sendCurrency, receiveCurrency };
      const exchangeRateAndAmount = await GetRateAndPriceQuery(data);

      setEnchangeRate(exchangeRateAndAmount.data.exchangeRate);
      setReceiveAmount(exchangeRateAndAmount.data.receiveAmount);
    } catch (e) {}
  };

  useEffect(() => {
    if (sendCurrency && receiveCurrency && sendAmount) {
      getExchangeRateAndAmount(sendAmount, sendCurrency, receiveCurrency);
    }
  }, [sendCurrency, receiveCurrency, sendAmount]);

  useEffect(() => {
    setBalance(userData[sendCurrency]);
  }, [sendCurrency, userData]);

  const onSubmit = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    if (
      !(receiverUserName && sendAmount >= 5 && sendCurrency && receiveCurrency)
    ) {
      console.log(receiverUserName, sendAmount, sendCurrency, receiveCurrency);
      setIsLoading(false);
      return;
    }
    try {
      const data = {
        receiverUserName,
        sendAmount,
        sendCurrency,
        receiveCurrency,
      };

      await CreateTransactionQuery(data);
      setIsLoading(false);
      setSuccessMessage('SENT');
      setTimeout(() => {
        navigate('/');
      }, 2000);
      setIsLoading(false);
    } catch {
      setIsLoading(false);
    }
  };

  return (
    <Layout>
      <FormWrapper>
        {successMessage && <FormSuccess>{successMessage}</FormSuccess>}
        <FormTitle>Transaction</FormTitle>
        <TFormDiv>
          <TFInnerDiv>
            <TFCurrency>
              <TFCTitle>Send Currency</TFCTitle>
              <TCRadioWrap>
                <TCRadioDiv>
                  <TCRadioSpan
                    active={sendCurrency === 'GBP' ? true : false}
                    onClick={() => {
                      setSendCurrencyValue('GBP');
                    }}
                  ></TCRadioSpan>
                  <TCValue
                    onClick={() => {
                      setSendCurrencyValue('GBP');
                    }}
                  >
                    GBP
                  </TCValue>
                </TCRadioDiv>
                <TCRadioDiv>
                  <TCRadioSpan
                    active={sendCurrency === 'USD' ? true : false}
                    onClick={() => {
                      setSendCurrencyValue('USD');
                    }}
                  ></TCRadioSpan>
                  <TCValue
                    onClick={() => {
                      setSendCurrencyValue('USD');
                    }}
                  >
                    USD
                  </TCValue>
                </TCRadioDiv>
                <TCRadioDiv>
                  <TCRadioSpan
                    active={sendCurrency === 'EUR' ? true : false}
                    onClick={() => {
                      setSendCurrencyValue('EUR');
                    }}
                  ></TCRadioSpan>
                  <TCValue
                    onClick={() => {
                      setSendCurrencyValue('EUR');
                    }}
                  >
                    EUR
                  </TCValue>
                </TCRadioDiv>
              </TCRadioWrap>
            </TFCurrency>
            {sendCurrency && (
              <>
                <BalanceP>
                  Your {sendCurrency} balance is {balance}
                </BalanceP>
                <InputDiv>
                  <InputLabel htmlFor="sendAmount">
                    <span>Amount</span>
                  </InputLabel>
                  <InputStyled
                    type="number"
                    name="sendAmount"
                    placeholder="Email"
                    onChange={(e: any) => {
                      setSendAmount(e.target.value);
                    }}
                    value={sendAmount}
                    balance={balance}
                  />
                </InputDiv>
                {sendAmountErr && (
                  <MessageStyle error={sendAmountErr}>
                    {sendAmountErr}
                  </MessageStyle>
                )}
              </>
            )}
          </TFInnerDiv>
          <TFInnerDiv>
            <TFCurrency>
              <TFCTitle>Receive Currency</TFCTitle>
              <TCRadioWrap>
                <TCRadioDiv>
                  <TCRadioSpan
                    active={receiveCurrency === 'GBP' ? true : false}
                    onClick={() => {
                      setReceiveCurrencyValue('GBP');
                    }}
                  ></TCRadioSpan>
                  <TCValue
                    onClick={() => {
                      setReceiveCurrencyValue('GBP');
                    }}
                  >
                    GBP
                  </TCValue>
                </TCRadioDiv>
                <TCRadioDiv>
                  <TCRadioSpan
                    active={receiveCurrency === 'USD' ? true : false}
                    onClick={() => {
                      setReceiveCurrencyValue('USD');
                    }}
                  ></TCRadioSpan>
                  <TCValue
                    onClick={() => {
                      setReceiveCurrencyValue('USD');
                    }}
                  >
                    USD
                  </TCValue>
                </TCRadioDiv>
                <TCRadioDiv>
                  <TCRadioSpan
                    active={receiveCurrency === 'EUR' ? true : false}
                    onClick={() => {
                      setReceiveCurrencyValue('EUR');
                    }}
                  ></TCRadioSpan>
                  <TCValue
                    onClick={() => {
                      setReceiveCurrencyValue('EUR');
                    }}
                  >
                    EUR
                  </TCValue>
                </TCRadioDiv>
              </TCRadioWrap>
            </TFCurrency>
          </TFInnerDiv>
          {sendCurrency && receiveCurrency && receiverUserName && (
            <ReceivedDiv>
              <Balancep>{receiverUserName} will receive</Balancep>
              <ReceiveAmount>{receiveAmount}</ReceiveAmount>
              <Balancep>
                at {enchangeRate} {sendCurrency}/{receiveCurrency}
              </Balancep>
            </ReceivedDiv>
          )}
        </TFormDiv>
        <InputDiv>
          <InputStyledLogin
            type="text"
            placeholder="input Username"
            onChange={(e: any) => {
              setUserNamesSearchText(e.target.value);
            }}
            onFocus={() => setInputFocused(true)}
            onBlur={() =>
              setTimeout(() => {
                setInputFocused(false);
              }, 200)
            }
            value={userNamesSearchText}
            name="UserName"
          />
          {filteredUserNames && inputFocused && (
            <UserNameDiv>
              {filteredUserNames.map((username) => (
                <UserNamesP
                  onClick={() => setReceiverUserName(username['userName'])}
                  key={username['_id']}
                >
                  {username['userName']}
                </UserNamesP>
              ))}
            </UserNameDiv>
          )}
        </InputDiv>
        <ButtonWithLoader
          name="SEND"
          isLoading={isLoading}
          onClick={(e: any) => onSubmit(e)}
        />
      </FormWrapper>
    </Layout>
  );
};

export default Transaction;
