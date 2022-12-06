import { ColumnType } from "../utils/enums/columnType.enum";

export interface TaskModel {
  id: string;
  title: string;
  column: ColumnType;
  description: string;
  insertedAt: string;
  dueDate: string;
}
