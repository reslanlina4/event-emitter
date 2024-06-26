import { Injectable } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { VideoCreatedEvent } from 'src/video-created.event';



@Injectable()
export class VideoService {
    constructor(private eventEmitter:EventEmitter2){}


  async publish(){
        console.log("publishing a new video");
        const title ="how to smash button";
       const result =await  this.eventEmitter.emitAsync('video.created',new VideoCreatedEvent(title));
         return result;
    }
}
