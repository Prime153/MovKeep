import styled from 'styled-components';
import { FaUser } from 'react-icons/fa';
import { FaLock } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

export const UserIcon = styled(FaUser)`
  height: 20px;
`;
export const PasswordIcon = styled(FaLock)`
  height: 20px;
`;
export const MailIcon = styled(MdEmail)`
  height: 20px;
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  padding: 12px 5px;
  background: white;
  margin: 10px 0;

  
`;

export const IconContainer = styled.div`
  width: 40px;
  display: flex;
  justify-content: center;
  border-right: 2px solid ${({ theme }) => theme.colors.drakBlue};
`;
export const Input = styled.input`
  width: 100%;
  border: none;
  outline: none;
  font-size: ${({ theme }) => theme.fontSize.xs};
  padding-left: 7px;

  ::placeholder {
    font-weight: 500;
  }
`;
