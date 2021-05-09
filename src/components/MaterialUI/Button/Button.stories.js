import React from "react";
import { Button } from "@material-ui/core";

export default {
  title: "MaterialUI/Button",
  component: Button,
  argsTypes: {
    variant: {
      control: {
        type: "radio",
        options: ["Default", "Primary"],
      },
    },
    color: { control: "color" },
    children: { control: "text" },
    onClick: { action: "clicked" },
  },
};

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  variant: "contained",
  children: "Default",
};

export const Primary = Template.bind({});
Primary.args = {
  ...Default.args,
  color: "primary",
  children: "Primary",
};
