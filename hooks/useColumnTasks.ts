import { useCallback } from "react";
import { v4 as uuidv4 } from "uuid";
import { TaskModel } from "../interfaces/tasks.model";
import { ColumnType } from "../utils/enums/columnType.enum";
import { swap } from "../utils/helper";
import { debug } from "../utils/logging";
import useTaskCollection from "./useTaskCollection";

const MAX_TASK_PER_COLUMN = 100;
function format() {
  let currentDate = new Date();
  let date, month, year;

  date = currentDate.getDate() + 2;
  month = currentDate.getMonth() + 1;
  year = currentDate.getFullYear();

  date = date.toString().padStart(2, "0");

  month = month.toString().padStart(2, "0");

  return `${date}/${month}/${year}`;
}

function useColumnTasks(column: ColumnType) {
  const [tasks, setTasks] = useTaskCollection();

  const columnTasks = tasks[column];
  

  const addEmptyTask = useCallback(() => {
    debug(`Adding new empty task to ${column} column`);
    setTasks((allTasks) => {
      const columnTasks = allTasks[column];

      if (columnTasks.length > MAX_TASK_PER_COLUMN) {
        debug("Too many task!");
        return allTasks;
      }

      

      const newColumnTask: TaskModel = {
        id: uuidv4(),
        title: `New ${column} task`,
        column,
        insertedAt: format(),
        description: '',
        dueDate: format(),
      };

      return {
        ...allTasks,
        [column]: [newColumnTask, ...columnTasks],
      };
    });
  }, [column, setTasks]);
  const addInProgressTask = useCallback(() => {
    debug(`Adding new empty task to ${column} column`);
    setTasks((allTasks) => {
      const columnTasks = allTasks[column];

      if (columnTasks.length > MAX_TASK_PER_COLUMN) {
        debug("Too many task!");
        return allTasks;
      }

      const newColumnProgressTask: TaskModel = {
        id: uuidv4(),
        title: `New ${column} task`,
        column,
        insertedAt: format(),
        description: '',
        dueDate: format(),
      };

      return {
        ...allTasks,
        [column]: [newColumnProgressTask, ...columnTasks],
      };
    });
  }, [column, setTasks]);

  const deleteTask = useCallback(
    (id: TaskModel["id"]) => {
      debug(`Removing task ${id}..`);
      setTasks((allTasks) => {
        const columnTasks = allTasks[column];
        return {
          ...allTasks,
          [column]: columnTasks.filter((task) => task.id !== id),
        };
      });
    },
    [column, setTasks]
  );

  const updateTask = useCallback(
    (id: TaskModel["id"], updatedTask: Omit<Partial<TaskModel>, "id">) => {
      debug(`Updating task ${id} with ${JSON.stringify(updateTask)}`);
      setTasks((allTasks) => {
        const columnTasks = allTasks[column];
        return {
          ...allTasks,
          [column]: columnTasks.map((task) =>
            task.id === id ? { ...task, ...updatedTask } : task
          ),
        };
      });
    },
    [column, setTasks]
  );

  const dropTaskFrom = useCallback(
    (from: ColumnType, id: TaskModel["id"]) => {
      setTasks((allTasks) => {
        const fromColumnTasks = allTasks[from];
        const toColumnTasks = allTasks[column];
        const movingTask = fromColumnTasks.find((task) => task.id === id);

        console.log(`Moving task ${movingTask?.id} from ${from} to ${column}`);

        if (!movingTask) {
          return allTasks;
        }

        // remove the task from the original column and copy it within the destination column
        return {
          ...allTasks,
          [from]: fromColumnTasks.filter((task) => task.id !== id),
          [column]: [{ ...movingTask, column }, ...toColumnTasks],
        };
      });
    },
    [column, setTasks]
  );

  const swapTasks = useCallback(
    (i: number, j: number) => {
      debug(`Swapping task ${i} with ${j} in ${column} column`);
      setTasks((allTasks) => {
        const columnTasks = allTasks[column];
        return {
          ...allTasks,
          [column]: swap(columnTasks, i, j),
        };
      });
    },
    [column, setTasks]
  );

  return {
    tasks: columnTasks,
    addEmptyTask,
    addInProgressTask,
    updateTask,
    dropTaskFrom,
    deleteTask,
    swapTasks,
  };
}

export default useColumnTasks;
