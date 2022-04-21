import { Module } from "@nestjs/common";
import { TrackModule } from "./track/track.module";
import { MongooseModule } from '@nestjs/mongoose';


@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/spoty_my'),
  TrackModule
]
})
export class AppModule {

}