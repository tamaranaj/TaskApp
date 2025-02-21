import { Body, Controller, Get, HttpCode, Post, Put, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/auth/guards/auth.guard';
import { ProjectService } from './project.service';
import { Request } from 'express';
import { CreateProjectDTO } from 'src/DTOS/createProject.dto';
import { UpdateProjectDTO } from 'src/DTOS/updateProjdect.dto';

@UseGuards(AuthGuard)
@Controller('project')
export class ProjectController {

    constructor(private readonly projectService: ProjectService){}


    @Get()
    async getProjects(@Req() request: Request){
        const user = request['user'].userID
        const projects= await this.projectService.getProjects(user)
        return projects
    }

    @Post()
    @HttpCode(201)
    async create(@Req() request: Request,@Body() project: CreateProjectDTO){
        const user = request['user'].userID

        const created= await this.projectService.createProject(user, project)
        return created
    }


    @Put()
    async updateProject(@Body()update: UpdateProjectDTO){
        const response = await this.projectService.updateProject(update)
        return response
    }


}
