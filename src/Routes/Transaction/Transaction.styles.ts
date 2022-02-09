import styled from 'styled-components';

export const FormSuccess = styled.h2`
  text-transform: uppercase;
  font-size: 2em;
  color: lightgreen;
  letter-spacing: 1px;
  text-align: center;
`;

export const TFormDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1em;
`;

export const TFInnerDiv = styled.div``;

export const TFCurrency = styled.div``;
export const TFCTitle = styled.h4``;
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
  font-size: 12px;
`;
export const InputDiv = styled.div`
  margin: 10px 0;
  display: grid;
  grid-template-columns: 1fr 3fr;
`;
export const InputLabel = styled.label`
  font-size: 1.1em;
  font-weight: bold;
  padding: 10px;
  color: grey;
  background-color: lightblue;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const InputStyled = styled.input<{ value: number; balance: number }>`
  width: 100%;
  padding: 15px;
  font-size: 1.1em;
  background-color: #dddfe7;
  color: #0d1022;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
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

export const ReceivedDiv = styled.div`
  margin-top: 20px;
`;

export const Balancep = styled.p`
  margin-top: 0px;
  margin-bottom: 3px;
`;
export const ReceiveAmount = styled.h3`
  margin-top: 0px;
  margin-bottom: 3px;
`;
export const UserNameDiv = styled.div`
  margin-top: 5px;
  margin-bottom: 3px;
  display: grid;
  grid-template-columns: 200px;
  grid-auto-rows: 100px;
`;
export const UserNamesP = styled.p`
  padding: 5px;
  text-align: center;
  background: lightblue;
`;
