import React from "react";
import { PureTaskList } from "../TaskList/TaskList";
import * as TaskStories from "../Task/Task.stories";

export default {
  title: "todoApp/TaskList",
  component: PureTaskList,
  decorators: [(story) => <div style={{ padding: "3rem" }}>{story()}</div>],
};

const Template = (args) => <PureTaskList {...args} />;

// export const Default = Template.bind({});
// Default.args = {
//   // args 구성을 통한 이야기 ​​형성.
//   // 데이터는 task.stories.js의 기본 스토리에서 상속되었습니다.
//   tasks: [
//     { ...TaskStories.Default.args.task, id: "1", title: "Task 1" },
//     { ...TaskStories.Default.args.task, id: "2", title: "Task 2" },
//     { ...TaskStories.Default.args.task, id: "3", title: "Task 3" },
//     { ...TaskStories.Default.args.task, id: "4", title: "Task 4" },
//     { ...TaskStories.Default.args.task, id: "5", title: "Task 5" },
//     { ...TaskStories.Default.args.task, id: "6", title: "Task 6" },
//   ],
// };

// export const WithPinnedTasks = Template.bind({});
// WithPinnedTasks.args = {
//   // args 구성을 통한 이야기 ​​형성.
//   // 기본 스토리에서 상속 된 데이터입니다.
//   tasks: [
//     ...Default.args.tasks.slice(0, 5),
//     { id: "6", title: "Task 6 (pinned)", state: "TASK_PINNED" },
//   ],
// };

// export const Loading = Template.bind({});
// Loading.args = {
//   tasks: [],
//   loading: true,
// };

// export const Empty = Template.bind({});
// Empty.args = {
//   // args 구성을 통한 이야기 ​​형성.
//   // Loading 스토리에서 상속 된 데이터입니다.
//   ...Loading.args,
//   loading: false,
// };
