import { AuthService } from './auth.service';
import { SignInDTO } from 'src/DTOS/signIn.dto';
import { SignUpDTO } from 'src/DTOS/signUp.dto';
import { Request } from 'express';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    register(signUpDTO: SignUpDTO): Promise<{
        message: string;
    }>;
    login(signInDTO: SignInDTO): Promise<{
        message: string;
        token: string;
    }>;
    getMe(request: Request): Promise<{
        id: string;
        name: string;
        email: string;
        projects: import("../project/project.entity").ProjectORMEntity[];
        tasks: import("../task/task.entity").TaskORMEntity[];
    }>;
}
