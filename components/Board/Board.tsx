import useColumnDrop from "../../hooks/useColumnDrop";
import useColumnTasks from "../../hooks/useColumnTasks";
import { ColumnType } from "../../utils/enums/columnType.enum";
import Task from "../Tasks/Task";
import { Box, Divider, IconButton, Stack } from "@mui/material";


function Board({ column }: { column: ColumnType }) {
  const { tasks, deleteTask, dropTaskFrom, swapTasks, updateTask } =
    useColumnTasks(column);

  const { dropRef, isOver } = useColumnDrop(column, dropTaskFrom);

  const ColumnTasks = tasks.map((task, index) => (
    <Task
      key={task.id}
      task={task}
      index={index}
      onDropHover={swapTasks}
      onUpdate={updateTask}
      onDelete={deleteTask}
    />
  ));

  return (
    <Box>
      <Stack
        ref={dropRef}
        spacing={2}
        direction="column"
        divider={<Divider flexItem />}
      >
        {ColumnTasks}
      </Stack>
    </Box>
  );
}

export default Board;
