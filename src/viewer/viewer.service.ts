import { Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { VideoCreatedEvent } from 'src/video-created.event';

@Injectable()
export class ViewerService {


    @OnEvent('video.created')
    doSomthing({title}:VideoCreatedEvent){
        console.log("2.handling somthings");
        return 2;

    }

    @OnEvent('video.created',{async:true})
    notify({title}:VideoCreatedEvent){
        console.log("1.notifying subscribers",title);
        return 1;

    }


}
