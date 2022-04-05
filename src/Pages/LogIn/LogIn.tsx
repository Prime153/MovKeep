import React, { useState, useEffect, useRef } from 'react';
import LogInForm from '../../components/Molecules/LogInForm/LogInForm';
import {
  MainContainer,
  LogSignContainer,
  LogSignButton,
  MainHeading,
  ImageContainer,
  LoginContainer,
} from './LoginStyled';
import gsap from 'gsap';

const LogIn: React.FC = () => {
  const [isLogin, changeState] = useState<{ log?: Boolean; sign?: Boolean; init?: Boolean }>({
    log: true,
    sign: false,
    init: false,
  });

  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.to(container.current, { autoAlpha: 1, duration: 0.4 });
  }, []);

  return (
    <MainContainer ref={container}>
      <ImageContainer isLogin={isLogin.log}>
        <MainHeading isLogin={isLogin.log}>Save your moments</MainHeading>
      </ImageContainer>
      <LoginContainer isLogin={isLogin.log}>
        <LogSignContainer>
          <LogSignButton
            onClick={() =>
              changeState({
                log: true,
                sign: false,
                init: true,
              })
            }
            isLogin={isLogin.log}
          >
            Log In
          </LogSignButton>
          <span>/</span>
          <LogSignButton
            onClick={() =>
              changeState({
                log: false,
                sign: true,
                init: true,
              })
            }
            isLogin={isLogin.sign}
          >
            Sign Up
          </LogSignButton>
        </LogSignContainer>
        <LogInForm isLogin={isLogin.log} isClicked={isLogin.init} />
      </LoginContainer>
    </MainContainer>
  );
};

export default LogIn;
