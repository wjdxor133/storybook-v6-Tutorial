import styled, { css } from "styled-components";

const colors = {
  blue: "#00B8FF",
  gray: "#28323C",
  coral: "#FF6F61",
};

const types = {
  smallLine: css``,
  smallText: css``,
};

export const ButtonStyle = styled.button`
  ${({ type }) =>
    type === "largeFill" &&
    css`
      width: 375px;
      height: 64px;
      border: none;
      color: white;
      background-color: ${({ color }) => colors[color]};
    `};

  ${({ type }) =>
    type === "regularFill" &&
    css`
      width: 327px;
      height: 54px;
      border: none;
      color: white;
      background-color: ${({ color }) => colors[color]};
    `};

  ${({ type }) =>
    type === "regularLine" &&
    css`
      width: 327px;
      height: 54px;
      border: 1px solid #e9ebee;
      color: ${({ color }) => colors[color]};
      background-color: white;
    `};
`;
