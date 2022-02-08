import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const FormWrapper = styled.form`
  box-shadow: 4px 2px 10px #453a80, 2px 1px 5px #262041;
  padding: 3em;
  max-width: 700px;
  margin: auto;

  :hover {
    box-shadow: 2px 1px 5px #262041;
  }
`;

export const FormTitle = styled.h2`
  text-transform: uppercase;
  font-size: 2em;
  color: darkblue;
  letter-spacing: 1px;
  text-align: center;
`;

export const InputContainer = styled.div`
  margin: 2.5em 0 0.2em;
`;

export const InputDiv = styled.div`
  margin: 10px 0;
`;

export const InputStyled = styled.input`
  width: 100%;
  padding: 15px;
  font-size: 1.1em;
  border: none;
  background-color: #dddfe7;
  color: #0d1022;
  :hover {
    background-color: #d4d7e9;
  }
  &:focus {
    background-color: #c3c6d8;
    outline: none;
  }
`;

export const FormFooter = styled.footer`
  width: 100%;
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
export const FFP = styled.p`
  padding-right: 5px;
`;
export const StyledLink = styled(Link)`
  text-decoration: none;
  color: red;
  text-transform: uppercase;
  :hover {
    color: pink;
  }
`;
