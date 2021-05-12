import styled, { css } from "styled-components";

const sizes = {
  large: css`
    width: 375px;
    height: 64px;
  `,

  regular: css`
    width: 327px;
    height: 54px;
  `,

  small: css`
    width: 41px;
    height: 32px;
  `,
};

const types = {
  fill: css`
    border: none;
    color: white;
    background-color: ${({ color }) => colors[color]};
  `,

  line: css`
    border: 1px solid #e9ebee;
    color: ${({ color }) => colors[color]};
    background-color: white;
  `,
  text: css`
    border: none;
    color: ${({ color }) => colors[color]};
    background-color: inherit;
  `,
};

const colors = {
  blue: "#00B8FF",
  gray: "#28323C",
  coral: "#FF6F61",
};

export const ButtonStyle = styled.button`
  ${({ size }) => sizes[size]}
  ${({ type }) => types[type]}

  :disabled {
    background-color: #e9ebee;
    color: #c5c8ce;
  }
`;
