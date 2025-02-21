import { UsersORMEntity } from './users.entity';
import { Repository } from 'typeorm';
import { SignUpDTO } from 'src/DTOS/signUp.dto';
export declare class UsersService {
    private usersRepository;
    constructor(usersRepository: Repository<UsersORMEntity>);
    findUserByEmail(email: string): Promise<UsersORMEntity>;
    createUser(user: SignUpDTO): Promise<{
        message: string;
    }>;
    getMe(userID: string): Promise<UsersORMEntity>;
}
