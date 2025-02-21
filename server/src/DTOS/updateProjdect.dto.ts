import { IsOptional, IsString, MinLength } from "class-validator"

export class UpdateProjectDTO{
    @IsString()
    id:string

    @IsString()
    name: string

    @IsString()
    @IsOptional()
    @MinLength(5)
    description?: string
}
