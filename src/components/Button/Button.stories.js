import React from "react";
import Button from "./Button";

export default {
  title: "socar/Button",
  component: Button,
  args: {
    children: "버튼",
  },
  // argTypes: {
  //   size: {
  //     control: {
  //       type: "select",
  //       options: ["large", "regular", "small"],
  //     },
  //     defaultValue: "large",
  //   },
  //   type: {
  //     control: {
  //       type: "select",
  //       options: ["fill", "line", "text"],
  //     },
  //     defaultValue: "fill",
  //   },
  //   color: {
  //     control: {
  //       type: "select",
  //       options: ["blue", "gray", "coral"],
  //     },
  //     defaultValue: "blue",
  //   },
  //   disabled: {
  //     control: {
  //       type: "boolean",
  //     },
  //   },
  //   loading: {
  //     control: {
  //       type: "boolean",
  //     },
  //   },
  // },
};

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
