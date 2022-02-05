import { useState } from 'react';
import Layout from '../../Components/Layout/Layout';
import {
  FFP,
  FormButton,
  FormFooter,
  FormTitle,
  FormWrapper,
  InputContainer,
  InputDiv,
  InputStyled,
  StyledLink,
} from './Login.styles';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitByEnterKey = (e: any) => {
    if (e.which === 13) {
      onSubmit(e);
    }
  };
  const onSubmit = (e: any) => {
    e.preventDefault();
  };

  return (
    <Layout>
      <FormWrapper>
        <FormTitle>LogIn</FormTitle>
        <InputContainer>
          <InputDiv>
            <InputStyled
              type="text"
              placeholder="Email"
              onChange={(e: any) => {
                setEmail(e.target.value);
              }}
              value={email}
              onKeyDown={submitByEnterKey}
              name="email"
            />
          </InputDiv>
          <InputDiv>
            <InputStyled
              type="password"
              placeholder="password"
              onChange={(e: any) => setPassword(e.target.value)}
              value={password}
              onKeyDown={submitByEnterKey}
              name="password"
            />
          </InputDiv>
        </InputContainer>
        <FormButton onClick={(e) => onSubmit(e)}>SUBMIT</FormButton>
        <FormFooter>
          <FFP>Don't have an Account?</FFP>
          <StyledLink to="/signup">Signup</StyledLink>
        </FormFooter>
      </FormWrapper>
    </Layout>
  );
};

export default Login;
