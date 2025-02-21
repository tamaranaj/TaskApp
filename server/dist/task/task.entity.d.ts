import { ProjectORMEntity } from "src/project/project.entity";
import { UsersORMEntity } from "src/users/users.entity";
export declare class TaskORMEntity {
    id: string;
    title: string;
    description: string;
    createdAt: Date;
    dueDate: string;
    project: ProjectORMEntity;
    projectID: string;
    user: UsersORMEntity;
    userID: string;
}
