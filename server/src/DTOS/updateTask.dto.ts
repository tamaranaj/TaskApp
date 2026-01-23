import { IsEnum, IsNotEmpty, IsOptional, IsString } from "class-validator"
import { TaskStatus } from "src/task/taskStatus.enum"

export class UpdateTaskDTO{
        @IsString()
        @IsNotEmpty()
        id: string

        @IsOptional()
        @IsString()
        title:string
    
        @IsOptional()
        @IsString()
        description:string

        @IsOptional()
        @IsEnum(TaskStatus)
        status:TaskStatus
        
        @IsOptional()
        @IsString()
        dueDate:string
    
        @IsNotEmpty()
        @IsString()
        projectId:string
}
