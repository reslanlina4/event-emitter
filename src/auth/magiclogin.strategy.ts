import { PassportStrategy } from "@nestjs/passport";
import { Injectable, Logger } from '@nestjs/common'
import { AuthService } from "./auth.service";
import Strategy from "passport-magic-login";

@Injectable()
export class MagicloginStrategy extends PassportStrategy(Strategy){
    [x: string]: any;
    private readonly logger = new Logger(MagicloginStrategy.name);
    constructor(private readonly authService:AuthService){
        super({
            secret: 'SECRET',
            jwtOptions:{
                expiresIn:'5m'
            },
            callbackUrl:'http://localhost/auth/login/callback',
            sendMagicLink: async (destination, href) =>{
                // TODO: send email
                this.logger.debug(`sending email to ${destination} wuth Link ${href}`);
            },
            verify: async(payload, callback) =>
                callback(null, this.validate(payload)),
        });
    }

    validate(payload: { destination: string}) {
        const user = this.authService.validateUser(payload.destination);

        return user;
    }

}


