import React from "react";
import { ButtonStyle } from "./Button.styles";
import SyncLoader from "react-spinners/SyncLoader";

function Button(props) {
  const { children, loading, ...rest } = props;
  return (
    <div>
      <ButtonStyle {...rest}>
        {loading ? (
          <SyncLoader color="#ffffff" loading={loading} size={10} />
        ) : (
          children
        )}
      </ButtonStyle>
    </div>
  );
}

export default Button;
