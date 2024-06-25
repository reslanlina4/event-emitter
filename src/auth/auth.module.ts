import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from 'src/users/users.module';
import { MagicloginStrategy } from './magiclogin.strategy';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports:[UsersModule,PassportModule,JwtModule.register({
    secret:'secret',
    signOptions:{
      expiresIn: '1h'
    }
  })],
  controllers: [AuthController],
  providers: [AuthService,MagicloginStrategy],
})
export class AuthModule {}
