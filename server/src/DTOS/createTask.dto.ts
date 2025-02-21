import { IsNotEmpty, IsString } from "class-validator"

export class CreateTaskDTO{
    @IsNotEmpty()
    @IsString()
    title:string

    @IsNotEmpty()
    @IsString()
    description:string

    @IsNotEmpty()
    @IsString()
    dueDate:string

    @IsNotEmpty()
    @IsString()
    projectID:string

    
}
