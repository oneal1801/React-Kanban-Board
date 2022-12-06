import { ColumnType } from "../utils/enums/columnType.enum";
import { TagType } from "../utils/enums/tags.enum";

export interface TaskModel {
  id: string;
  title: string;
  column: ColumnType;
  tag: TagType;
  description: string;
  insertedAt: string;
  assigned: string;
  dueDate: string;
}
