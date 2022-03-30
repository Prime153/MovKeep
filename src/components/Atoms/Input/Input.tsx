import React from 'react';
import { Container, UserIcon, IconContainer, PasswordIcon, MailIcon, Input as TextField } from './InputStyled';

interface Props {
  placeholder: string;
  icon?: String ;
  type?: React.HTMLInputTypeAttribute | undefined;
  name?: string;
  value?: string;
  onChange?: (() => string  ) | any;
}

const pickIcon = (icon: String | undefined) => {
  switch (icon) {
    case 'password':
      return <PasswordIcon />;
    case 'user':
      return <UserIcon />;
    case 'mail':
      return <MailIcon />;
    default:
      return <UserIcon />;
  }
};

const Input: React.FC<Props> = ({ placeholder, icon, type, name, value, onChange }) => {
  return (
    <Container>
      <IconContainer>{pickIcon(icon)}</IconContainer>
      <TextField onChange={onChange} value={value} placeholder={placeholder} type={type} name={name} />
    </Container>
  );
};

export default Input;
