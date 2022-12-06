import { useLocalStorage } from "usehooks-ts";

import { v4 as uuidv4 } from "uuid";
import { TaskModel } from "../interfaces/tasks.model";
import { ColumnType } from "../utils/enums/columnType.enum";

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
        insertedAt: "12/05/2022",
        dueDate: "12/06/2022",
      },
    ],
    "In Progress": [
      {
        id: uuidv4(),
        column: ColumnType.IN_PROGRESS,
        title: "Task 2",
        description: "This is task number 2",
        insertedAt: "12/05/2022",
        dueDate: "12/06/2022",
      },
    ],
    Paused: [
      {
        id: uuidv4(),
        column: ColumnType.PAUSED,
        title: "Task 3",
        description: "This is task number 3",
        insertedAt: "12/05/2022",
        dueDate: "12/06/2022",
      },
    ],
    Completed: [
      {
        id: uuidv4(),
        column: ColumnType.COMPLETE,
        title: "Task 4",
        description: "This is task number 4",
        insertedAt: "12/05/2022",
        dueDate: "12/06/2022",
      },
    ],
  });
}

export default useTaskCollection;
