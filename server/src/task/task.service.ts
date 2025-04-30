import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TaskORMEntity } from './task.entity';
import { Repository } from 'typeorm';
import { CreateTaskDTO } from 'src/DTOS/createTask.dto';
import { UpdateTaskDTO } from 'src/DTOS/updateTask.dto';
import { TaskStatus } from './taskStatus.enum';

@Injectable()
export class TaskService {

    constructor(@InjectRepository(TaskORMEntity) private taskRepository:Repository<TaskORMEntity>){}

    async getTasks(userId:string){
        const tasks = await this.taskRepository.find({where:{userID:userId}, relations:['project']})
        if(!tasks){
             throw new NotFoundException('No tasks found!')
        }
        return tasks
    }

    async createTask(userId:string, task: CreateTaskDTO){
        const newTask = {
            ...task,
            status:TaskStatus.new
        }
        const creation = this.taskRepository.create({
            ...newTask,userID:userId
        })
        return await this.taskRepository.save(creation)
    }


    async updateTask(update: UpdateTaskDTO){

        const findTask = await this.findTask(update.id)
        const updateTask = this.taskRepository.merge(findTask, update)

        return await this.taskRepository.save(updateTask)
    }

    async findTask(taskId:string){
        const task = await this.taskRepository.findOne({where:{id:taskId}})
        return task
    }

 
}
