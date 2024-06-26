import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ViewerService } from './viewer/viewer.service';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { VideoService } from './video/video.service';

@Module({
  imports:[EventEmitterModule.forRoot()],
  controllers: [AppController],
  providers: [VideoService, ViewerService],
})
export class AppModule {}
