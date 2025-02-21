import { BadRequestException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compare, hash } from 'bcryptjs';
import { SignInDTO } from 'src/DTOS/signIn.dto';
import { SignUpDTO } from 'src/DTOS/signUp.dto';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService
    ){}


    async register(user:SignUpDTO){

        const checkUser = await this.usersService.findUserByEmail(user.email)

        if(checkUser){
            throw new BadRequestException(`User with email: ${user.email} already exist.`)
        }

        const hashedPass = await hash(user.password, 10)
        user.password = hashedPass
        const createdUser = await this.usersService.createUser(user)
        return createdUser

    }


    async login(user:SignInDTO){
        const{email,password} = user
        const checkUser = await this.usersService.findUserByEmail(user.email)

        if(!checkUser){
            throw new NotFoundException(`User with email: ${email} does not exist.`)
        }
        const isPassValid = await compare(password, checkUser.password)
        if(!isPassValid){
            throw new UnauthorizedException('Invalid password.')
        }
        const token = await this.jwtService.signAsync({userID: checkUser.id, email: checkUser.email})
        
        return token

    }

    async getMe(userId:string){
        return await this.usersService.getMe(userId)
    }
}
