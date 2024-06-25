import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { AuthService } from "./auth.service";


@Injectable()
export class jwtStrategy extends PassportStrategy(Strategy){
    constructor(private authService:AuthService){
        super({
            jwtFromRequest:ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignorExpiration:false,
            secretOrKey:'secret'
        });
    }

    async validate(payload:any){
        const user = this.authService.validateUser(payload.email);
        return user

    }

}