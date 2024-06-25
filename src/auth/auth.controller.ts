import { Body, Controller, Get, Post, Req, Res, UseGuards, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { MagicloginStrategy } from './magiclogin.strategy';
import { PasswordlessLoginDto } from './passwordless-login.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService,
    private strategy:MagicloginStrategy

  ) {}

  // post auth/login
 @Post('login')
 login(@Req() req, @Res() res,@Body(new ValidationPipe()) body:PasswordlessLoginDto){
  this.authService.validateUser(body.destination);
  return this.strategy.send(req,res)

 }

 @UseGuards(AuthGuard('magiclogin'))
 @Get('login/callback')
 callback(@Req() req){
  return this.authService.generateTokens(req.user);
  
 }



  //Get auth/login/callback
}
