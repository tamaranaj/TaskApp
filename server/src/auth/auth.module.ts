import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UsersModule } from 'src/users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

@Module({
  imports:[UsersModule,JwtModule.registerAsync({
    inject: [ConfigService],
    global: true,
    useFactory(env: ConfigService){
      return{
        secret: env.get('JWT_SECRET'),
        signOptions: {expiresIn: '30min'}
      }
    }
  })],
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule {}
