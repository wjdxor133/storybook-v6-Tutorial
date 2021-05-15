import React from "react";
import Button from "../Button/Button";
import { ButtonGroupItem } from "./ButtonGroup.styles";

function ButtonGroup(props) {
  const { buttons } = props;
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
