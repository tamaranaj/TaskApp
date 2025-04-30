import { TaskStatus } from "src/task/taskStatus.enum";
export declare class UpdateTaskDTO {
    id: string;
    title: string;
    description: string;
    status: TaskStatus;
    dueDate: string;
    projectId: string;
}
