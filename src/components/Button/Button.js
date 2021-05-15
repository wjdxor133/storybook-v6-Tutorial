import React from "react";
import PropTypes from "prop-types";
import { ButtonStyle } from "./Button.styles";
import SyncLoader from "react-spinners/SyncLoader";

/** `Button` 컴포넌트는 어떠한 작업을 트리거 할 때 사용합니다.  */
function Button(props) {
  const { children, loading, type, ...rest } = props;
  return (
    <div>
      <ButtonStyle type={type} {...rest}>
        {loading ? (
          <SyncLoader
            color={type === "regularLine" ? "#C5C8CE" : "#fff"}
            loading={loading}
            size={10}
          />
        ) : (
          children
        )}
      </ButtonStyle>
    </div>
  );
}

export default Button;

Button.propTypes = {
  /**
   * 버튼 타입
   */
  type: PropTypes.oneOf([
    "largeFill",
    "regularFill",
    "regularLine",
    "smallLine",
    "smallText",
  ]),
  /**
   * 버튼 색상
   */
  color: PropTypes.oneOf(["blue", "gray", "coral"]),

  /**
   * 버튼 활성화
   */
  disabled: PropTypes.bool,
  /**
   * 버튼 로딩
   */
  loading: PropTypes.bool,
  /**
   * Optional click handler
   */
  // onClick: PropTypes.func,

  /**
   * 버튼 글씨
   */

  children: PropTypes.string,
};
