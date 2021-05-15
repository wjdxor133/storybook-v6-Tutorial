import React from "react";
import Button from "../../components/Button/Button";
import ButtonGroup from "../../components/ButtonGroup/ButtonGroup";

export default {
  title: "socar/Buttons/RegularLineButton",
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
        type: "select",
        options: ["blue", "gray", "coral"],
      },
      defaultValue: "blue",
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
Default.args = {
  type: "regularLine",
};

export const BlueColor = Template.bind({});
BlueColor.args = {
  ...Default.args,
  color: "blue",
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
    { ...BlueColor.args, children: "Blue Enabled" },
    { ...GrayColor.args, children: "Gray Enabled" },
    { ...CoralColor.args, children: "Coral Enabled" },
  ],
};

export const Disabled = GroupTemplate.bind({});
Disabled.args = {
  ...Enabled.args,
  buttons: [
    { ...BlueColor.args, disabled: true, children: "Blue Disabled" },
    { ...GrayColor.args, disabled: true, children: "Gray Disabled" },
    { ...CoralColor.args, disabled: true, children: "Coral Disabled" },
  ],
};

export const EnabledLoading = GroupTemplate.bind({});
EnabledLoading.args = {
  ...Enabled.args,
  buttons: Enabled.args.buttons.map((button) => {
    return { ...button, loading: true };
  }),
};

export const DisabledLoading = GroupTemplate.bind({});
DisabledLoading.args = {
  ...Disabled.args,
  buttons: Disabled.args.buttons.map((button) => {
    return { ...button, loading: true };
  }),
};
