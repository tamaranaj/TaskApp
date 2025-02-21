import { ProjectORMEntity } from './project.entity';
import { Repository } from 'typeorm';
import { CreateProjectDTO } from 'src/DTOS/createProject.dto';
import { UpdateProjectDTO } from 'src/DTOS/updateProjdect.dto';
export declare class ProjectService {
    private projectsRepository;
    constructor(projectsRepository: Repository<ProjectORMEntity>);
    getProjects(userID: string): Promise<ProjectORMEntity>;
    createProject(userId: string, project: CreateProjectDTO): Promise<ProjectORMEntity>;
    updateProject(update: UpdateProjectDTO): Promise<{
        message: string;
    }>;
    findProject(projectId: string): Promise<ProjectORMEntity>;
}
