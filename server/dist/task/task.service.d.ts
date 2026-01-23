import { TaskORMEntity } from './task.entity';
import { Repository } from 'typeorm';
import { CreateTaskDTO } from 'src/DTOS/createTask.dto';
import { UpdateTaskDTO } from 'src/DTOS/updateTask.dto';
export declare class TaskService {
    private taskRepository;
    constructor(taskRepository: Repository<TaskORMEntity>);
    getTasks(userId: string): Promise<TaskORMEntity[]>;
    createTask(userId: string, task: CreateTaskDTO): Promise<TaskORMEntity>;
    updateTask(update: UpdateTaskDTO): Promise<TaskORMEntity>;
    findTask(taskId: string): Promise<TaskORMEntity>;
}
