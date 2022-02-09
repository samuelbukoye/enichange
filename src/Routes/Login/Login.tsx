import { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import validator from 'validator';
import ButtonWithLoader from '../../Components/ButtonWithLoader/ButtonWithLoader';
import Layout from '../../Components/Layout/Layout';
import { LoginQuery } from '../../Queries/LoginQuery';
import { MessageStyle } from '../Signup/Signup.styles';
import {
  FFP,
  FormFooter,
  FormTitle,
  ErrorMessage,
  FormWrapper,
  InputContainer,
  InputDiv,
  InputStyled,
  StyledLink,
} from './Login.styles';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [emailOrUserName, setEmailOrUserName] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [validating, setValidating] = useState(false);
  const [error, setError] = useState('');
  const [errorEmailOrUserName, setErrorEmailOrUserName] = useState('');
  const [errorPassword, setErrorPassword] = useState('');

  const submitByEnterKey = (e: any) => {
    if (e.which === 13) {
      onSubmit(e);
    }
  };

  const onSubmit = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    if (!isValidated()) {
      setIsLoading(false);
      return;
    }

    console.log('no errors');
    const data = validator.isEmail(emailOrUserName)
      ? { email: emailOrUserName, password }
      : { userName: emailOrUserName, password };
    try {
      const response = await LoginQuery(data);
      dispatch({
        type: 'USER',
        payload: response.data.user,
      });
      dispatch({
        type: 'TOKEN',
        payload: response.data.token,
      });

      navigate('/');
      return;
    } catch (error) {
      setIsLoading(false);

      setError('Invalid login credentials!');
      setTimeout(() => {
        setError('');
      }, 3000);
      return;
    }
  };

  const isValidated = () => {
    setValidating(true);
    if (!(validateEmailOrUserName() && validatePassword())) {
      return false;
    }
    return true;
  };

  // email or username
  const validateEmailOrUserName = useCallback(() => {
    if (!emailOrUserName) {
      setErrorEmailOrUserName('input email or username');
      return false;
    }
    setErrorEmailOrUserName('');
    return true;
  }, [emailOrUserName]);

  useEffect(() => {
    validateEmailOrUserName();
  }, [emailOrUserName, validateEmailOrUserName]);

  // password
  const validatePassword = useCallback(() => {
    if (!password) {
      setErrorPassword('Input password');
      return false;
    }

    setErrorPassword('');
    return true;
  }, [password]);

  useEffect(() => {
    validatePassword();
  }, [password, validatePassword]);

  return (
    <Layout>
      <FormWrapper>
        <FormTitle>Login</FormTitle>
        <ErrorMessage>{error}</ErrorMessage>
        <InputContainer>
          <InputDiv>
            <InputStyled
              type="text"
              placeholder="Email or Username"
              onChange={(e: any) => {
                setEmailOrUserName(e.target.value);
              }}
              value={emailOrUserName}
              onKeyDown={submitByEnterKey}
              name="emailOrUserName"
            />
            {validating && (
              <MessageStyle error={errorEmailOrUserName}>
                {errorEmailOrUserName ? errorEmailOrUserName : 'okay'}
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
            {validating && (
              <MessageStyle error={errorPassword}>
                {errorPassword ? errorPassword : 'okay'}
              </MessageStyle>
            )}
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
