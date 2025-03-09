import { Projects } from "./projects.interface";
import { Task } from "./task.interface";

export interface User{
    id: string,
    name: string,
    email: string,
    projects: Projects[],
    tasks: Task[]
}
