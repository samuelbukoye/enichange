import { useCallback, useEffect, useState } from 'react';
import validator from 'validator';
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
} from '../Login/Login.styles';
import { MessageStyle } from './Signup.styles';

const Signup = () => {
  const [firstName, setFirstName] = useState('');
  const [errorFName, setErrorFName] = useState('');
  const [lastName, setLastName] = useState('');
  const [errorLName, setErrorLName] = useState('');
  const [email, setEmail] = useState('');
  const [errorEmail, setErrorEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorPassword, setErrorPassword] = useState('');
  const [validating, setValidating] = useState(false);

  const submitByEnterKey = (e: any) => {
    if (e.which === 13) {
      onSubmit(e);
    }
  };
  const onSubmit = (e: any) => {
    e.preventDefault();
    if (isValidated()) {
      console.log('no errors');
    }
  };
  const isValidated = () => {
    setValidating(true);
    if (validateEmail()) {
      return false;
    }
    return true;
  };

  // first name
  const validateFName = useCallback(() => {
    if (!(firstName.length > 0)) {
      setErrorFName('Please input your first name');
      return false;
    }
    setErrorFName('');
    return true;
  }, [firstName]);

  useEffect(() => {
    validateFName();
  }, [firstName, validateFName]);

  // last name
  const validateLName = useCallback(() => {
    if (!(lastName.length > 0)) {
      setErrorLName('Please input your last name');
      return false;
    }
    setErrorLName('');
    return true;
  }, [lastName]);

  useEffect(() => {
    validateLName();
  }, [lastName, validateLName]);

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

  // password
  const validatePassword = useCallback(() => {
    const validExp = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
    if (password.length < 8) {
      setErrorPassword('Password must have at least 8 characters');
      return false;
    }
    if (!validExp.test(password)) {
      setErrorPassword(
        'Password must have, an uppercase letter, a lowercase letter,a number, and one special character'
      );
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
        <FormTitle>Signup</FormTitle>
        <InputContainer>
          <InputDiv>
            <InputStyled
              type="text"
              placeholder="first name"
              onChange={(e: any) => setFirstName(e.target.value)}
              value={firstName}
              onKeyDown={submitByEnterKey}
              name="first-name"
            />
            {validating && (
              <MessageStyle error={errorFName}>
                {errorFName ? errorFName : 'okay'}
              </MessageStyle>
            )}
          </InputDiv>
          <InputDiv>
            <InputStyled
              type="text"
              placeholder="last name"
              onChange={(e: any) => setLastName(e.target.value)}
              value={lastName}
              onKeyDown={submitByEnterKey}
              name="last-name"
            />
            {validating && (
              <MessageStyle error={errorLName}>
                {errorLName ? errorLName : 'okay'}
              </MessageStyle>
            )}
          </InputDiv>
          <InputDiv>
            <InputStyled
              type="text"
              placeholder="email"
              onChange={(e: any) => setEmail(e.target.value)}
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
            {validating && (
              <MessageStyle error={errorPassword}>
                {errorPassword ? errorPassword : 'okay'}
              </MessageStyle>
            )}
          </InputDiv>
        </InputContainer>
        <FormButton onClick={(e) => onSubmit(e)}>SUBMIT</FormButton>
        <FormFooter>
          <FFP>Already have an Account?</FFP>
          <StyledLink to="/login">Login</StyledLink>
        </FormFooter>
      </FormWrapper>
    </Layout>
  );
};

export default Signup;
