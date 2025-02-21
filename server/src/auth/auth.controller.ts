import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignInDTO } from 'src/DTOS/signIn.dto';
import { SignUpDTO } from 'src/DTOS/signUp.dto';
import { AuthGuard } from './guards/auth.guard';
import { Request } from 'express';

@Controller('auth')
export class AuthController {
    constructor(private authService:AuthService){ }

    @Post('register')
    async register(@Body() signUpDTO: SignUpDTO){
        const user = await this.authService.register(signUpDTO)
        return user
    }

    @Post('login')
    async login(@Body() signInDTO: SignInDTO){
        const accessToken = await this.authService.login(signInDTO)
        return {message: `Login success`, token: accessToken}
    }


    @UseGuards(AuthGuard)
    @Get('getme')
    async getMe(@Req() request: Request){
        const user = request['user'].userID
        const response = await this.authService.getMe(user)
        return response
        
    }
}
