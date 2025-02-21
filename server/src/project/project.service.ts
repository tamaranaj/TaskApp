import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProjectORMEntity } from './project.entity';
import { Repository } from 'typeorm';
import { CreateProjectDTO } from 'src/DTOS/createProject.dto';
import { UpdateProjectDTO } from 'src/DTOS/updateProjdect.dto';

@Injectable()
export class ProjectService {

    constructor(@InjectRepository(ProjectORMEntity) private projectsRepository: Repository<ProjectORMEntity>){}

    async getProjects(userID: string){
        const projects =  await this.projectsRepository.findOne({where: {user: {id: userID}}, relations: ["tasks"]})
        console.log("first", projects)
        if(!projects){
            throw new NotFoundException('No projects found!')
        }
        return projects
    }


    async createProject(userId:string,project: CreateProjectDTO){
     
        const newProject = this.projectsRepository.create({...project,userID:userId})
        return await this.projectsRepository.save(newProject)

    }

    async updateProject(update: UpdateProjectDTO){
        const findProject = await this.findProject(update.id)

        console.log(findProject)
        const updateProject = this.projectsRepository.merge(findProject, update)

        await this.projectsRepository.save(updateProject)
        return {message: `Update success.`}

    }


    async findProject(projectId:string){
        
        const project = await this.projectsRepository.findOne({where: {id: projectId}})
        return project
     
    }
    

}
