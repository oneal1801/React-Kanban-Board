import { StatusType } from "../utils/statusType.enum";

export interface TaskModel {
    id: string;
    title: string;
    priority: number;
    createDate: Date;
    dueDate: Date;
    status: StatusType;
}