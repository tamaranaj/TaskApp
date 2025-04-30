import { ProjectORMEntity } from "src/project/project.entity";
import { UsersORMEntity } from "src/users/users.entity";
import { TaskStatus } from "./taskStatus.enum";
export declare class TaskORMEntity {
    id: string;
    title: string;
    description: string;
    createdAt: Date;
    dueDate: string;
    status: TaskStatus;
    project: ProjectORMEntity;
    projectID: string;
    user: UsersORMEntity;
    userID: string;
}
