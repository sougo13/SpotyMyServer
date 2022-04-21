import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import mongoose from "mongoose";
import { CreateCommentDto } from "./dto/create-comment.dto";
import { CreateTrackDto } from "./dto/create-track.dto";
import { TrackService } from "./track.service";


@Controller('/tracks')
export class TrackController {

  constructor(private trackservice: TrackService) {

  }

  @Post()
  create(@Body() dto: CreateTrackDto) {
    return this.trackservice.create(dto);
  }

  @Get()
  getAll() {
    return this.trackservice.getAll();
  }

  @Get(':id')
  getOne(@Param('id') id: mongoose.Schema.Types.ObjectId) {
    return this.trackservice.getOne(id);
  }

  @Delete(':id')
  delete(@Param('id') id: mongoose.Schema.Types.ObjectId) {
    return this.trackservice.delete(id);
  }

  @Post('/comment')
  addComment(@Body() dto: CreateCommentDto){
    return this.trackservice.addComment(dto);
  }
}