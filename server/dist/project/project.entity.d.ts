import { TaskORMEntity } from "src/task/task.entity";
import { UsersORMEntity } from "src/users/users.entity";
export declare class ProjectORMEntity {
    id: string;
    name: string;
    description: string;
    user: UsersORMEntity;
    userID: string;
    tasks: TaskORMEntity[];
}
