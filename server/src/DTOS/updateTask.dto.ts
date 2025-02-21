import { IsNotEmpty, IsOptional, IsString } from "class-validator"

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
        @IsString()
        dueDate:string
    
        @IsNotEmpty()
        @IsString()
        projectId:string
}
