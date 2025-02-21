import { Controller, UseGuards,Get, HttpCode, Post, Put, Req, Body, Delete } from '@nestjs/common';
import { AuthGuard } from 'src/auth/guards/auth.guard';
import { TaskService } from './task.service';
import { Request } from 'express';
import { CreateTaskDTO } from 'src/DTOS/createTask.dto';
import { UpdateTaskDTO } from 'src/DTOS/updateTask.dto';

@UseGuards(AuthGuard)
@Controller('task')
export class TaskController {

    constructor(private readonly taskService:TaskService){ }

    @Get()
    async getTask(@Req() request: Request){
        const user = request['user'].userID
        const tasks = await this.taskService.getTasks(user)
        return tasks
    }

    @Post()
    @HttpCode(201)
    async create(@Req() request: Request,@Body() task: CreateTaskDTO){
        const user = request['user'].userID
        const created= await this.taskService.createTask(user, task)
        return created
    }

    @Put()
    async updateProject(@Body()update: UpdateTaskDTO){
        const response = await this.taskService.updateTask(update)
        return response
    }

}
