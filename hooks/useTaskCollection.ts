import { useLocalStorage } from "usehooks-ts";

import { v4 as uuidv4 } from "uuid";
import { TaskModel } from "../interfaces/tasks.model";
import { ColumnType } from "../utils/enums/columnType.enum";
import { TagType } from "../utils/enums/tags.enum";

function useTaskCollection() {
  return useLocalStorage<{
    [key in ColumnType]: TaskModel[];
  }>("tasks", {
    Todo: [
      {
        id: uuidv4(),
        column: ColumnType.TO_DO,
        title: "Task 1",
        description: "This is task number 1",
        tag: TagType.FORM,
        assigned: "Oneal",
        insertedAt: "12/05/2022",
        dueDate: "12/06/2022",
      },
    ],
    "In Progress": [
      {
        id: uuidv4(),
        column: ColumnType.IN_PROGRESS,
        title: "Task 2",
        tag: TagType.BLOG_POST,
        assigned: "Oneal",
        description: "This is task number 2",
        insertedAt: "12/05/2022",
        dueDate: "12/06/2022",
      },
    ],
    Done: [
      {
        id: uuidv4(),
        column: ColumnType.DONE,
        title: "Task 3",
        tag: TagType.LONG,
        assigned: "Oneal",
        description: "This is task number 3",
        insertedAt: "12/05/2022",
        dueDate: "12/06/2022",
      },
    ],
  });
}

export default useTaskCollection;
