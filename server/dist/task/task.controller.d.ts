import { TaskService } from './task.service';
import { Request } from 'express';
import { CreateTaskDTO } from 'src/DTOS/createTask.dto';
import { UpdateTaskDTO } from 'src/DTOS/updateTask.dto';
export declare class TaskController {
    private readonly taskService;
    constructor(taskService: TaskService);
    getTask(request: Request): Promise<import("./task.entity").TaskORMEntity[]>;
    create(request: Request, task: CreateTaskDTO): Promise<import("./task.entity").TaskORMEntity>;
    updateProject(update: UpdateTaskDTO): Promise<import("./task.entity").TaskORMEntity>;
}
