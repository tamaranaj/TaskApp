import { Task } from "./task.interface"

export interface Projects{
    id : string,
    name: string,
    description: string
    userID:string,
    tasks: Task[]
}
