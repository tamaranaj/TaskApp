import { ProjectORMEntity } from "src/project/project.entity";
import { TaskORMEntity } from "src/task/task.entity";
export declare class UsersORMEntity {
    id: string;
    name: string;
    email: string;
    password: string;
    projects: ProjectORMEntity[];
    tasks: TaskORMEntity[];
}
