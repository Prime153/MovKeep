import React from "react";
import { LogSubmitButton } from "./LogSignButtonStyled";

interface Props {
  title?: String | undefined;
  type: ( "submit" | undefined) & String;
  disabled: (boolean | undefined) & Boolean;

}

const LogSignButton: React.FC<Props> = ({ title, type, disabled }) => {
  
  
  return (
    <LogSubmitButton  disabled={disabled} type={type}>
      {title}
    </LogSubmitButton>
  );
};

export default LogSignButton;
