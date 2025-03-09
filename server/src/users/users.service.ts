import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersORMEntity } from './users.entity';
import { Repository } from 'typeorm';
import { SignUpDTO } from 'src/DTOS/signUp.dto';


@Injectable()
export class UsersService {
    constructor(@InjectRepository(UsersORMEntity) private usersRepository: Repository<UsersORMEntity>){}

    
    async findUserByEmail(email:string){
        const user = await this.usersRepository.findOne({where: {email: email}, relations: ["projects","tasks"]})
        return user
    }


    async createUser(user: SignUpDTO){

        const addUser = this.usersRepository.create(user)
        await this.usersRepository.save(addUser)

        return {message: `User ${addUser.name} is success registered with id: ${addUser.id}`}
    }
    
    async getMe(userID:string){
        const user = await this.usersRepository.findOne({where: {id: userID}, relations: ["projects","tasks"]})
        return {
            id:user.id,
            name: user.name,
            email: user.email,
            projects: user.projects,
            tasks: user.tasks
        }
    }


}
