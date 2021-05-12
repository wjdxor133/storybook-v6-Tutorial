import React from "react";
import styled from "styled-components";
import Button from "../Button";

function ButtonGroup(props) {
  const { buttons, children } = props;
  return (
    <div>
      {buttons.map((button, i) => {
        return (
          <ButtonGroupItem>
            <Button key={i} {...button} />
          </ButtonGroupItem>
        );
      })}
    </div>
  );
}

export default ButtonGroup;

const ButtonGroupItem = styled.div`
  margin-bottom: 8px;
`;
