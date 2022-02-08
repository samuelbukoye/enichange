import { useCallback, useEffect, useState } from 'react';
import ButtonWithLoader from '../../Components/ButtonWithLoader/ButtonWithLoader';
import Layout from '../../Components/Layout/Layout';
import { FormTitle, FormWrapper } from '../Login/Login.styles';
import { MessageStyle } from '../Signup/Signup.styles';
import {
  Balancep,
  BalanceP,
  InputDiv,
  InputLabel,
  InputStyled,
  ReceivedDiv,
  ReceivedValue,
  TCRadioDiv,
  TCRadioSpan,
  TCRadioWrap,
  TCValue,
  TFCTitle,
  TFCurrency,
  TFInnerDiv,
  TFormDiv,
} from './Transaction.styles';

const Transaction = () => {
  const onSubmit = (e: any) => {
    e.preventDefault();
  };
  const [isLoading, setIsLoading] = useState(false);
  const [balance, setBalance] = useState(2345.0);
  const [sendCurrency, setSendCurrency] = useState('');
  const [receiveCurrency, setReceiveCurrency] = useState('');
  const [sendValue, setSendValue] = useState(10);
  const [receivedValue, setReceivedValue] = useState(10);
  const [sendValueErr, setSendValueErr] = useState('gfdsd');

  const [receiver, setReceiver] = useState('Bukoye samuel');
  const [enchangeRate, setEnchangeRate] = useState(0.456);

  const setSendCurrencyValue = (curr: string) => {
    sendCurrency === curr ? setSendCurrency('') : setSendCurrency(curr);
  };
  const setReceiveCurrencyValue = (curr: string) => {
    receiveCurrency === curr
      ? setReceiveCurrency('')
      : setReceiveCurrency(curr);
  };

  const handleValueChange = useCallback(() => {
    if (sendValue < 1) {
      setSendValueErr('Must be a positive value');
      return;
    } else if (sendValue > balance) {
      setSendValueErr('Value to send is more than balance at' + balance);
      return;
    }
    setSendValueErr('');
  }, [sendValue, balance]);

  useEffect(() => {
    handleValueChange();
  }, [sendValue, handleValueChange]);

  return (
    <Layout>
      <FormWrapper>
        <FormTitle>Transaction</FormTitle>
        <TFormDiv>
          <TFInnerDiv>
            <TFCurrency>
              <TFCTitle>Send Currency</TFCTitle>
              <TCRadioWrap>
                <TCRadioDiv>
                  <TCRadioSpan
                    active={sendCurrency === 'ngn' ? true : false}
                    onClick={() => {
                      setSendCurrencyValue('ngn');
                    }}
                  ></TCRadioSpan>
                  <TCValue
                    onClick={() => {
                      setSendCurrencyValue('ngn');
                    }}
                  >
                    NGN
                  </TCValue>
                </TCRadioDiv>
                <TCRadioDiv>
                  <TCRadioSpan
                    active={sendCurrency === 'usd' ? true : false}
                    onClick={() => {
                      setSendCurrencyValue('usd');
                    }}
                  ></TCRadioSpan>
                  <TCValue
                    onClick={() => {
                      setSendCurrencyValue('usd');
                    }}
                  >
                    USD
                  </TCValue>
                </TCRadioDiv>
                <TCRadioDiv>
                  <TCRadioSpan
                    active={sendCurrency === 'eur' ? true : false}
                    onClick={() => {
                      setSendCurrencyValue('eur');
                    }}
                  ></TCRadioSpan>
                  <TCValue
                    onClick={() => {
                      setSendCurrencyValue('eur');
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
                  <InputLabel htmlFor="sendValue">
                    <span>Amount</span>
                  </InputLabel>
                  <InputStyled
                    type="number"
                    name="sendValue"
                    placeholder="Email"
                    onChange={(e: any) => {
                      setSendValue(e.target.value);
                    }}
                    value={sendValue}
                    balance={balance}
                  />
                </InputDiv>
                {sendValueErr && (
                  <MessageStyle error={sendValueErr}>
                    {sendValueErr}
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
                    active={receiveCurrency === 'ngn' ? true : false}
                    onClick={() => {
                      setReceiveCurrencyValue('ngn');
                    }}
                  ></TCRadioSpan>
                  <TCValue
                    onClick={() => {
                      setReceiveCurrencyValue('ngn');
                    }}
                  >
                    NGN
                  </TCValue>
                </TCRadioDiv>
                <TCRadioDiv>
                  <TCRadioSpan
                    active={receiveCurrency === 'usd' ? true : false}
                    onClick={() => {
                      setReceiveCurrencyValue('usd');
                    }}
                  ></TCRadioSpan>
                  <TCValue
                    onClick={() => {
                      setReceiveCurrencyValue('usd');
                    }}
                  >
                    USD
                  </TCValue>
                </TCRadioDiv>
                <TCRadioDiv>
                  <TCRadioSpan
                    active={receiveCurrency === 'eur' ? true : false}
                    onClick={() => {
                      setReceiveCurrencyValue('eur');
                    }}
                  ></TCRadioSpan>
                  <TCValue
                    onClick={() => {
                      setReceiveCurrencyValue('eur');
                    }}
                  >
                    EUR
                  </TCValue>
                </TCRadioDiv>
              </TCRadioWrap>
            </TFCurrency>
            {sendCurrency && receiveCurrency && (
              <ReceivedDiv>
                <Balancep>{receiver} will receive</Balancep>
                <ReceivedValue>{receivedValue}</ReceivedValue>
                <Balancep>
                  at {enchangeRate} {sendCurrency}/{receiveCurrency}
                </Balancep>
              </ReceivedDiv>
            )}
          </TFInnerDiv>
        </TFormDiv>
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
