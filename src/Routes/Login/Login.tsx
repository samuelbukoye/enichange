import { useCallback, useEffect, useState } from 'react';
import validator from 'validator';
import ButtonWithLoader from '../../Components/ButtonWithLoader/ButtonWithLoader';
import Layout from '../../Components/Layout/Layout';
import { MessageStyle } from '../Signup/Signup.styles';
import {
  FFP,
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
  const [isLoading, setIsLoading] = useState(false);
  const [validating, setValidating] = useState(false);
  const [errorEmail, setErrorEmail] = useState('');

  const submitByEnterKey = (e: any) => {
    if (e.which === 13) {
      onSubmit(e);
    }
  };
  const onSubmit = (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    if (isValidated()) {
      setIsLoading(false);
      console.log('no errors');
    }
    setIsLoading(false);
  };

  const isValidated = () => {
    setValidating(true);
    if (validateEmail()) {
      return false;
    }
    return true;
  };

  // email
  const validateEmail = useCallback(() => {
    if (!validator.isEmail(email)) {
      setErrorEmail('Please input a correct email address');
      return false;
    }
    setErrorEmail('');
    return true;
  }, [email]);

  useEffect(() => {
    validateEmail();
  }, [email, validateEmail]);

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
            {validating && (
              <MessageStyle error={errorEmail}>
                {errorEmail ? errorEmail : 'okay'}
              </MessageStyle>
            )}
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
        <ButtonWithLoader
          name="LOGIN"
          isLoading={isLoading}
          onClick={(e: any) => onSubmit(e)}
        />
        <FormFooter>
          <FFP>Don't have an Account?</FFP>
          <StyledLink to="/signup">Signup</StyledLink>
        </FormFooter>
      </FormWrapper>
    </Layout>
  );
};

export default Login;
