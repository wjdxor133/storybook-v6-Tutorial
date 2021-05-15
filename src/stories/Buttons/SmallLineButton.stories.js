import React from "react";
import Button from "../../components/Button/Button";

export default {
  title: "socar/Buttons/SmallLineButton",
  component: Button,
  args: {
    children: "버튼",
  },
  argTypes: {
    type: {
      control: {
        type: "text",
      },
    },
    color: {
      control: {
        type: "text",
      },
      defaultValue: "gray",
    },
    disabled: {
      control: {
        type: "boolean",
      },
    },
    loading: {
      control: {
        type: "boolean",
      },
      defaultValue: false,
    },
  },
};

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  type: "smallLine",
  loading: false,
};

export const GrayColor = Template.bind({});
GrayColor.args = {
  ...Default.args,
  color: "gray",
};

export const Enabled = Template.bind({});
Enabled.args = {
  ...GrayColor.args,
  children: "Gray",
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Enabled.args,
  disabled: true,
};
