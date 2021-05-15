import styled, { css } from "styled-components";

const types = {
  largeFill: css`
    width: 375px;
    height: 64px;
    border: none;
    color: white;
    background-color: ${({ color }) => colors[color]};
  `,

  regularFill: css`
    width: 327px;
    height: 54px;
    border: none;
    color: white;
    background-color: ${({ color }) => colors[color]};
  `,

  regularLine: css`
    width: 327px;
    height: 54px;
    border: 1px solid #e9ebee;
    color: ${({ color }) => colors[color]};
    background-color: white;
  `,

  smallLine: css`
    width: 41px;
    height: 32px;
    border: 1px solid #e9ebee;
    color: ${({ color }) => colors[color]};
    background-color: white;
  `,

  smallText: css`
    width: 41px;
    height: 32px;
    border: none;
    color: ${({ color }) => colors[color]};
    background-color: inherit;
  `,
};

export const colors = {
  blue: "#00B8FF",
  gray: "#28323C",
  coral: "#FF6F61",
};

export const ButtonStyle = styled.button`
  ${({ type }) => types[type]}

  :disabled {
    background-color: #e9ebee;
    color: #c5c8ce;
  }
`;
