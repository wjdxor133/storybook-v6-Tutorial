import React from "react";
import { ButtonStyle } from "./Button.styles";

function Button(props) {
  const { children, ...rest } = props;
  return (
    <div>
      <ButtonStyle {...rest}>{children}</ButtonStyle>
    </div>
  );
}

export default Button;
