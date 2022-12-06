import DeleteIcon from "@mui/icons-material/Delete";
import {
  Box,
  Card,
  CardActions,
  Chip,
  IconButton,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import _ from "lodash";
import { memo } from "react";
import { useTaskDragAndDrop } from "../../hooks/useTaskDragAndDrop";
import { TaskModel } from "../../interfaces/tasks.model";
import { AutoResizeTextarea } from "./AutoResizeTextArea";
import { ColumnType } from "../../utils/enums/columnType.enum";
import React from "react";

const ColumnColorScheme: Record<ColumnType, string> = {
  Todo: "default",
  "In Progress": "primary",
  Paused: "error",
  Completed: "success",
};



type TaskProps = {
  index: number;
  task: TaskModel;
  onUpdate: (id: TaskModel["id"], updatedTask: TaskModel) => void;
  onDelete: (id: TaskModel["id"]) => void;
  onDropHover: (i: number, j: number) => void;
};

function Task({
  index,
  task,
  onUpdate: handleUpdate,
  onDropHover: handleDropHover,
  onDelete: handleDelete,
}: TaskProps) {
  const { ref, isDragging } = useTaskDragAndDrop<HTMLDivElement>(
    { task, index: index },
    handleDropHover
  );

  const handleTitleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newTitle = e.target.value;
    handleUpdate(task.id, { ...task, title: newTitle });
  };

  const handleDeleteClick = () => {
    handleDelete(task.id);
  };

  return (
    <Card elevation={0} ref={ref} sx={{ backgroundColor: "grey.200" }}>
      {/* <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        ref={ref}
      >
        <Box sx={{ minWidth: 100, flexGrow: 1 }}>
          <AutoResizeTextarea
            value={task.title}
            p={0}
            resize="none"
            minH={50}
            maxH={100}
            focusBorderColor="none"
            fontWeight="semibold"
            onChange={handleTitleChange}
          />
        </Box>

        <Typography
          variant="caption"
          sx={{ pl: 3, flexShrink: 0, color: "text.secondary" }}
        >
          <IconButton color="error" size="small" onClick={handleDeleteClick}>
            <DeleteIcon />
          </IconButton>
        </Typography>
      </Stack> */}
      <Stack spacing={2} sx={{ p: 3 }}>
        <Link color="inherit" underline="hover">
          <Typography variant="subtitle2" noWrap>
            {task.title}
          </Typography>
        </Link>
        <Chip
          variant="outlined"
          size="small"
          color={ColumnColorScheme[task.column]}
          label={task.column}
        />

        <Stack
          direction="column"
          spacing={1}
          alignItems="flex-start"
          justifyContent="space-between"
        >
          <Typography variant="body2" gutterBottom>
            {task.description}
          </Typography>

          <Typography fontSize={13}>
            <span>
              <b>Due Date:</b>
            </span>
            {task.dueDate}
          </Typography>
        </Stack>
      </Stack>
      <CardActions sx={{ backgroundColor: "primary.main" }}>
        <Stack
          direction="row"
          alignItems="right"
          justifyContent="space-between"
        >
          <IconButton color="default" size="small" onClick={handleDeleteClick}>
            <DeleteIcon />
          </IconButton>
        </Stack>
      </CardActions>
    </Card>
  );
}
export default memo(Task, (prev, next) => {
  if (
    _.isEqual(prev.task, next.task) &&
    _.isEqual(prev.index, next.index) &&
    prev.onDelete === next.onDelete &&
    prev.onDropHover === next.onDropHover &&
    prev.onUpdate === next.onUpdate
  ) {
    return true;
  }

  return false;
});
