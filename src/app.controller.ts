import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthGuard } from '@nestjs/passport';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  // @Get protected (require jwt)
  @UseGuards(AuthGuard('jwt'))
  @Get('protected')
  getProtected(@Req() req){
    return `you're ${req.user.name}`;
  }
}
