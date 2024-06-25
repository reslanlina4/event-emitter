import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/users/user.entity';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
    
    constructor(private userService:UsersService,
        private jwtService:JwtService

    ){}

    generateTokens(user: User) {
        //TODO:create jwt
        const payload ={sub:user.id , email:user.email};
        return {
            access_token: this.jwtService.sign(payload),
        }
    }

    validateUser(email:string){
       const user = this.userService.findOneByEmail(email);
       if(!user){
        throw new UnauthorizedException();
       }
       return user;

    }
}
