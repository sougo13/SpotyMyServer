import { Body, Controller, Delete, Get, Param, Post, UploadedFiles, UseInterceptors } from "@nestjs/common";
import { FileFieldsInterceptor } from "@nestjs/platform-express";
import { ObjectId } from "mongoose";
import { CreateCommentDto } from "./dto/create-comment.dto";
import { CreateTrackDto } from "./dto/create-track.dto";
import { TrackService } from "./track.service";


@Controller('/tracks')
export class TrackController {

  constructor(private trackservice: TrackService) {

  }

  @Post()
  @UseInterceptors(FileFieldsInterceptor([
    { name: 'image', maxCount: 1 },
    { name: 'audio', maxCount: 1 },
  ]))
  create(@UploadedFiles() files, @Body() dto: CreateTrackDto) {
    const { image, audio } = files;
    return this.trackservice.create(dto, image[0], audio[0]);
  }

  @Get()
  getAll() {
    return this.trackservice.getAll();
  }

  @Get(':id')
  getOne(@Param('id') id: ObjectId) {
    return this.trackservice.getOne(id);
  }

  @Delete(':id')
  delete(@Param('id') id: ObjectId) {
    return this.trackservice.delete(id);
  }

  @Post('/comment')
  addComment(@Body() dto: CreateCommentDto) {
    return this.trackservice.addComment(dto);
  }

  @Post('/listen/:id')
  listen(@Param('id') id: ObjectId){
    return this.trackservice.listen(id);
  }
}