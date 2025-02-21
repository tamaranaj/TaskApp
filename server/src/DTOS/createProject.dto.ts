import { IsNotEmpty, IsString } from "class-validator"

export class CreateProjectDTO{
    @IsNotEmpty()
    @IsString()
    name: string

    @IsNotEmpty()
    @IsString()
    description:string
}
