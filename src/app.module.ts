import { Module } from "@nestjs/common";
import { TrackModule } from "./track/track.module";
import { MongooseModule } from '@nestjs/mongoose';
import { FileModule } from "./file/file.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { resolve } from "path";


@Module({
  imports: [
    ServeStaticModule.forRoot({ rootPath: resolve(__dirname, 'static') }),
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/spoty_my'),
    TrackModule,
    FileModule
  ]
})
export class AppModule {

}