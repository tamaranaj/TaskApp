import { JwtService } from '@nestjs/jwt';
import { SignInDTO } from 'src/DTOS/signIn.dto';
import { SignUpDTO } from 'src/DTOS/signUp.dto';
import { UsersService } from 'src/users/users.service';
export declare class AuthService {
    private usersService;
    private jwtService;
    constructor(usersService: UsersService, jwtService: JwtService);
    register(user: SignUpDTO): Promise<{
        message: string;
    }>;
    login(user: SignInDTO): Promise<string>;
    getMe(userId: string): Promise<{
        id: string;
        name: string;
        email: string;
        projects: import("../project/project.entity").ProjectORMEntity[];
        tasks: import("../task/task.entity").TaskORMEntity[];
    }>;
}
