import React from "react";
import Button from "./Button";
import ButtonGroup from "./ButtonGroup/ButtonGroup";

export default {
  title: "socar/Button",
  component: Button,
  args: {
    children: "버튼",
  },
  argTypes: {
    size: {
      control: {
        type: "select",
        options: ["large", "regular", "small"],
      },
    },
    type: {
      control: {
        type: "select",
        options: ["fill", "line", "text"],
      },
    },
    color: {
      control: {
        type: "select",
        options: ["blue", "gray", "coral"],
      },
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
    },
  },
};

const Template = (args) => <Button {...args} />;
const GroupTemplate = (args) => <ButtonGroup {...args} />;

export const Default = Template.bind({});

export const BlueColor = Template.bind({});
BlueColor.args = {
  ...Default.args,
  children: "Blue Color",
};

export const GrayColor = Template.bind({});
GrayColor.args = {
  ...Default.args,
  color: "gray",
  children: "Gray Color",
};

export const CoralColor = Template.bind({});
CoralColor.args = {
  ...Default.args,
  color: "coral",
  children: "Coral Color",
};

export const Enabled = GroupTemplate.bind({});
Enabled.args = {
  buttons: [
    { ...BlueColor.args },
    { ...GrayColor.args },
    { ...CoralColor.args },
  ],
};

export const Disabled = GroupTemplate.bind({});
Disabled.args = {
  ...Enabled.args,
  buttons: Enabled.args.buttons.map((button) => {
    return { ...button, disabled: true };
  }),
};

export const EnabledLoading = GroupTemplate.bind({});
EnabledLoading.args = {
  ...Enabled.args.buttons,
  buttons: Enabled.args.buttons.map((button) => {
    return { ...button, loading: true };
  }),
};

export const DisabledLoading = GroupTemplate.bind({});
DisabledLoading.args = {
  ...Disabled.args.buttons,
  buttons: Disabled.args.buttons.map((button) => {
    return { ...button, loading: true };
  }),
};
