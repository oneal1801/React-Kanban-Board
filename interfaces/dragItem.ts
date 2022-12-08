import { ColumnType } from "../utils/enums/columnType.enum";
import { TaskModel } from "./tasks.model";

export interface DragItem {
  index: number;
  id: TaskModel["id"];
  from: ColumnType;
}
