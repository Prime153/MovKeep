import styled, { css } from 'styled-components';
import LogInBack from '../../assets/Images/LogInBack.png';

interface Log {
  isLogin?: Boolean | undefined;
}

export const MainContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
`;

export const ImageContainer = styled.div<Log>`
  background-image: url(${LogInBack});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.4s;

  @media all and (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    display: none;
  }

  ${({ isLogin }) =>
    !isLogin &&
    css`
      width: 40%;
    `}
`;

export const LogSignContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  margin: 5px 10px;
  color: white;

  span {
    font-size: ${({ theme }) => theme.fontSize.l};
  }
`;

export const LogSignButton = styled.button<Log>`
  border: 2px solid red;
  font-size: ${({ theme }) => theme.fontSize.s};
  color: white;
  background: none;
  border: none;
  transition: 0.4s;
  cursor: pointer;

  

  ${({ isLogin }) =>
    isLogin &&
    css`
      font-size: ${({ theme }) => theme.fontSize.m};
      font-weight: bold;

      
    `}
`;

export const MainHeading = styled.h1<Log>`
  color: white;
  font-family: ${({ theme }) => theme.fontFamily.Roboto};
  font-size: ${({ theme }) => theme.fontSize.xl};
  transition: 0.4s;
  text-align: center;
  padding: 0 10px;

  ${({ isLogin }) =>
    !isLogin &&
    css`
      font-size: ${({ theme }) => theme.fontSize.l};
    `}
`;

export const LoginContainer = styled.div<Log>`
  width: 50%;
  background-color: ${({ theme }) => theme.colors.mainBlue};
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.4s;
  position: relative;


  ${({ isLogin }) =>
    !isLogin &&
    css`
      width: 60%;
    `}

  @media all and (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    width: 100%;
  }
`;
