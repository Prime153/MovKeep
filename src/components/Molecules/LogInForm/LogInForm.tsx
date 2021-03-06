import React, { useEffect, useRef, useCallback, useState } from 'react';
import { Formik } from 'formik';
import FormikContext from '../../../utils/FormikContext';
import {
  MainContainer,
  Error,
  GoogleButton,
  ForgottenPassword,
  InputContainer,
  LogoImage,
  FormContainer,
} from './LogInFormStyled';
import Input from '../../Atoms/Input/Input';
import * as Yup from 'yup';
import Logo from '../../../assets/Images/Logo.png';
import { FcGoogle as GoogleIcon } from 'react-icons/fc';
import gsap from 'gsap';
import LogSignButton from '../../Atoms/LogInButton/LogSignButton';
import assignRefToArray from '../../../utils/AssignRefsToArray';
import { useAuth } from '../../../Contexts/AuthContext';
import Alert from '../../Atoms/Alert/Alert';
import useAxios from '../../../utils/test';
import Loading from '../../../Pages/Loading/Loading';

interface Values {
  password: string;
  passwordConfirm: string;
  email: string;
}

interface Props {
  isLogin: Boolean | undefined;
  isClicked: Boolean | undefined;
}

const LogInForm: React.FC<Props> = ({ isLogin, isClicked }) => {
  const initalValues: Values = { password: '', passwordConfirm: '', email: '' };
  const goggleContainer = useRef<HTMLDivElement>(null);
  const passEmailInput = useRef<Array<HTMLDivElement>>([]);
  const formContainer = useRef<HTMLFormElement>(null);
  const pass = useRef<HTMLDivElement>(null);
  const logo = useRef<HTMLImageElement>(null);
  const forgotten = useRef<HTMLButtonElement>(null);

  const { signUp, logIn, errorHandle, logWithGoogle } = useAuth();

  const SchemaSignUp = Yup.object({
    password: Yup.string()
      .required('No password provided')
      .min(4, 'Password is too short - at least 4 char.')
      .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
    passwordConfirm: Yup.string()
      .required('No repeat password provided')
      .oneOf([Yup.ref('password'), null], 'Passwords must match'),
    email: Yup.string().email().required('No email provided'),
  });
  const SchemaLogIn = Yup.object({
    password: Yup.string()
      .required('No password provided')
      .min(4, 'Password is too short - at least 4 char.')
      .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
    email: Yup.string().email().required('No email provided'),
  });

  const convertMessage = useCallback((error: String) => {
    const pureSentance = error.split('/')[1].replaceAll('-', ' ');
    return pureSentance.charAt(0).toLocaleUpperCase() + pureSentance.slice(1);
  }, []);

  useEffect(() => {
    if (isLogin) {
      // Log in

      gsap.to(goggleContainer.current, {
        y: 0,
        autoAlpha: 1,
      });

      if (isClicked) {
        gsap.to(passEmailInput.current, {
          y: 0,
          autoAlpha: 0,
        });
        gsap.to(pass.current, {
          y: 0,
        });
      }

      gsap.to(formContainer.current, {
        y: 0,
        height: '58%',
      });
      gsap.to(logo.current, {
        y: 0,
      });
      gsap.to(forgotten.current, {
        autoAlpha: 1,
      });
    } else {
      gsap.to(goggleContainer.current, {
        y: -20,
        autoAlpha: 0,
      });
      gsap.to(passEmailInput.current, {
        autoAlpha: 1,
      });
      gsap.to(pass.current, {
        y: -30,
      });

      gsap.to(formContainer.current, {
        height: '60%',
        y: -70,
      });
      gsap.to(logo.current, {
        y: 30,
      });
      gsap.to(forgotten.current, {
        autoAlpha: 0,
      });
    }
  }, [isLogin, isClicked]);

  const [response, error, loading] = useAxios('https://api.punkapi.com/v2/beers/random');

  console.log(response?.data);

  return (
    <MainContainer isLogin={isLogin}>
      {errorHandle && <Alert type="error">{convertMessage(errorHandle.code)}</Alert>}

      <picture>
        <LogoImage ref={logo} src={Logo} />
      </picture>
      <div ref={goggleContainer}>
        <GoogleButton onClick={async () => await logWithGoogle()}>
          <GoogleIcon />
          <span>Log in with Google</span>
        </GoogleButton>

        <p>or</p>
      </div>

      <Formik
        initialValues={initalValues}
        validationSchema={isLogin ? SchemaLogIn : SchemaSignUp}
        onSubmit={async (values, { resetForm }) => {
          isLogin
            ? await logIn(values.email, values.password)
            : await signUp(values.email, values.password).then(() => resetForm());
        }}
      >
        {({ values, handleChange }) => (
          <FormContainer ref={formContainer}>
            <FormikContext isLogin={isLogin} />
            <InputContainer>
              <Input
                icon="mail"
                onChange={handleChange}
                value={values.email}
                name="email"
                type="email"
                placeholder="Email"
              />
              <Error name="email" component="div" />
            </InputContainer>
            <InputContainer ref={pass}>
              <Input
                icon="password"
                onChange={handleChange}
                value={values.password}
                name="password"
                type="password"
                placeholder="Password"
              />
              <Error name="password" component="div" />
            </InputContainer>

            <InputContainer ref={assignRefToArray(passEmailInput.current)}>
              <Input
                icon="password"
                onChange={handleChange}
                value={values.passwordConfirm}
                name="passwordConfirm"
                type="password"
                placeholder="Repeat Password"
              />
              <Error name="passwordConfirm" component="div" />
            </InputContainer>
            <ForgottenPassword ref={forgotten} type="button">
              Forgot password?
            </ForgottenPassword>

            <LogSignButton title={isLogin ? 'Login' : 'Sign up'} type="submit" disabled={false} />
          </FormContainer>
        )}
      </Formik>
    </MainContainer>
  );
};

export default LogInForm;
