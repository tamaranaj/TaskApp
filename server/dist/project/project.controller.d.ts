import { ProjectService } from './project.service';
import { Request } from 'express';
import { CreateProjectDTO } from 'src/DTOS/createProject.dto';
import { UpdateProjectDTO } from 'src/DTOS/updateProjdect.dto';
export declare class ProjectController {
    private readonly projectService;
    constructor(projectService: ProjectService);
    getProjects(request: Request): Promise<import("./project.entity").ProjectORMEntity[]>;
    create(request: Request, project: CreateProjectDTO): Promise<import("./project.entity").ProjectORMEntity>;
    updateProject(update: UpdateProjectDTO): Promise<{
        message: string;
    }>;
}
