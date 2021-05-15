// import React from "react";
import Button from "./Button";

export default {
  title: "socar/Buttons",
  component: Button,
  args: {
    children: "버튼",
  },
  argTypes: {
    type: {
      control: {
        type: "select",
        options: [
          "largeFill",
          "regularFill",
          "regularLine",
          "smallLine",
          "smallText",
        ],
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
  parameters: {
    component: Button,
    componentSubtitle:
      "버튼은 유저의 행동을 유도하거나 원하는 선택을 할 수 있도록 합니다.",
  },
};

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  type: "largeFill",
  color: "blue",
  children: "Blue",
};

export const largeFillButton = () => (
  <div>
    <Button {...Default.args} />
    <Button {...Default.args} color="gray" children="gray" />
    <Button {...Default.args} color="coral" children="coral" />
  </div>
);

largeFillButton.parameters = {
  docs: {
    // 스토리는 이제 설명을 포함합니다.
    storyDescription:
      "`largeFill` 타입 버튼은 가장 강한 강도로 강조하는 버튼으로, 유저의 다음 행동이 명확할 때 사용합니다.",
  },
};
