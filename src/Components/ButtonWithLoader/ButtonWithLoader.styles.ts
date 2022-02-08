import styled from 'styled-components';

export const FormButton = styled.button`
  cursor: pointer;
  background-color: darkblue;
  color: white;
  width: 100%;
  margin-top: 25px;
  padding: 15px;
  font-size: 1em;
  border: none;
  box-shadow: 2px 0px 5px #453a80, 1px 0px 2px #262041;
  :hover {
    box-shadow: 1px 0px 2px #262041;
  }
`;

export const Loader = styled.span<{ props?: boolean }>`
  padding: 0 3px;
`;
