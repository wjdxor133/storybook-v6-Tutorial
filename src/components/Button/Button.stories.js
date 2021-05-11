import React from "react";
import Button from "./Button";
// import { withKnobs, text, boolean, select } from "@storybook/addon-knobs";

export default {
  title: "socar/Button",
  component: Button,
  args: {
    children: "Button",
  },
  // decorators: [withKnobs],
  argTypes: {
    color: {
      control: {
        type: "select",
        options: ["blue", "gray", "coral"],
        defaultValue: "blue",
      },
    },
  },
};

const Template = (args) => <Button {...args} />;

export const LargeFillButton = Template.bind({});
LargeFillButton.args = {
  type: "largeFill",
};

export const RegularFillButton = Template.bind({});
RegularFillButton.args = {
  type: "regularFill",
};

export const RegularLineButton = Template.bind({});
RegularLineButton.args = {
  type: "regularLine",
};

// const children = text("children", "버튼");
// const color = select("color", ["blue", "gray", "coral"], "blue");

// export const LargeFillButton = () => {
//   return (
//     <Button type="largeFill" color={color}>
//       {children}
//     </Button>
//   );
// };
