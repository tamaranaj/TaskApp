import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';


@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private jwtService:JwtService, private configService: ConfigService){ }
  async canActivate(
    context: ExecutionContext,
  ): Promise<boolean> {

    const req : Request = context.switchToHttp().getRequest()
    const token = this.extractToken(req)

    if(!token){
      throw new UnauthorizedException()
    }

    try {
      const jwtPayload = await this.jwtService.verifyAsync(token, {secret: this.configService.get('JWT_SECRET')})
      console.log("payload",jwtPayload)
      
      if(jwtPayload.role){
        return false
      }

      
      req['user'] = jwtPayload
      return true
      
    } catch (error) {
      throw new UnauthorizedException({message: error.message})
    }

  }



  extractToken(request: Request): string | undefined {
    const auth = request.headers.authorization || ''

    const splAuthHeader = auth.split(' ')

    const [_bearer, token] = splAuthHeader

    return token
  }
}
