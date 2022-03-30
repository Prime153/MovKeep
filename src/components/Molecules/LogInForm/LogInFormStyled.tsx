import styled, { css } from 'styled-components';
import { ErrorMessage } from 'formik';
import { Form } from 'formik';

interface Log {
  isLogin?: Boolean | undefined;
}

export const MainContainer = styled.div<Log>`
  width: 65%;
  height: 80%;
  font-family: ${({ theme }) => theme.fontFamily.Roboto};
  text-align: center;
  transition: 0.4s;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;

  ${({ isLogin }) =>
    isLogin &&
    css`
      height: 60%;
    `}

  p {
    color: white;
    font-weight: 500;
    justify-self: center;
    align-self: center;
    font-size: ${({ theme }) => theme.fontSize.xs};
  }
`;

export const FormContainer = styled(Form)<Log>`
  width: 100%;
  height: 55%;
  display: flex;
  justify-content: space-between;
  flex-flow: column nowrap;
`;

export const GoogleButton = styled.button`
  width: 100%;
  height: 50px;
  font-size: ${({ theme }) => theme.fontSize.xs};
  color: ${({ theme }) => theme.colors.darkerBlue};
  font-weight: 500;
  background: white;
  border: none;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  svg {
    position: absolute;
    left: 4%;
    height: 22px;
    width: 25px;

    @media all and (max-width: 970px) {
      position: static;
    }
  }
`;

export const Error = styled(ErrorMessage)`
  color: #fff;
  position: absolute;
  top: 52px;
  width: 60%;
  border-radius: 5px;
  padding: 5px 0;
  background-color: #dd4b39;
  font-size: ${({ theme }) => theme.fontSize.xs};
`;

export const LogoImage = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

export const InputContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
`;
