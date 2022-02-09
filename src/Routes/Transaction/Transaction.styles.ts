import styled from 'styled-components';

export const FormSuccess = styled.h2`
  text-transform: uppercase;
  font-size: 2em;
  color: lightgreen;
  letter-spacing: 1px;
  text-align: center;
`;

export const TFCTitle = styled.h4`
  font-size: 1.1em;
  color: darkblue;
`;
export const TFInnerDiv = styled.div``;

export const TFormDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1em;
  grid-template-areas:
    'TFCurrencySend TFCurrencyReceive'
    'SendAmountDiv ReceiverUserNameDiv';

  @media (max-width: 575px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      'TFCurrencySend' 'TFCurrencyReceive'
      'SendAmountDiv' 'ReceiverUserNameDiv';
  }
`;

export const TFCurrencySend = styled.div`
  grid-area: TFCurrencySend;
`;

export const TFCurrencyReceive = styled.div`
  grid-area: TFCurrencyReceive;
`;

export const SendAmountDiv = styled.div`
  grid-area: SendAmountDiv;
`;

export const ReceiverUserNameDiv = styled.div`
  grid-area: ReceiverUserNameDiv;
`;

export const TCRadioWrap = styled.div``;
export const TCRadioDiv = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 5px;
`;

export const TCRadioSpan = styled.span<{ active: boolean }>`
  cursor: pointer;
  height: 25px;
  width: 25px;
  background-color: ${(props) => (props.active ? '#2196F3' : 'lightgrey')};
  border-radius: 50%;
  margin-right: 10px;
`;

export const TCValue = styled.span`
  cursor: pointer;
`;

export const BalanceP = styled.p`
  font-size: 1.1em;
  font-weight: bold;
  color: grey;
`;
export const InputDiv = styled.div`
  margin: 20px 0 10px;
`;
export const InputLabel = styled.label`
  font-size: 1.1em;
  font-weight: bold;
  color: darkblue;
`;
export const InputStyled = styled.input<{ value: number; balance: number }>`
  width: 100%;
  padding: 15px;
  font-size: 1.1em;
  background-color: #dddfe7;
  color: #0d1022;
  border-color: ${(p) =>
    p.value > p.balance || p.value < 5 ? 'pink' : 'green'};

  :hover {
    background-color: #d4d7e9;
  }
  &:focus {
    background-color: #c3c6d8;
    outline: none;
  }
`;

export const Balancep = styled.p`
  margin-top: 0px;
  margin-bottom: 3px;
`;
export const ReceiveAmount = styled.h3`
  margin-top: 0px;
  margin-bottom: 3px;
`;
export const UserNamesDiv = styled.div`
  width: 100%;
  max-height: 190px;
  position: relative;
  margin-top: 1px;
  border: 2px solid lightblue;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  overflow-y: scroll;
`;
export const UserNamesPWrap = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: 40px;
  margin-top: 1px;
  border: 2px solid lightblue;
  border-bottom-left-radius: 10px;
`;
export const UserNamesP = styled.p`
  z-index: 2;
  width: 100%;
  margin: 0;
  border-top: 2px solid lightblue;
  padding: 5px;
  text-align: center;
  font-size: 0.9em;
  font-weight: bold;
  color: grey;
  :hover {
    font-size: 1em;
    background-color: lightblue;
  }
`;
