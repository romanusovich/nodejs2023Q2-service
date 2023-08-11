import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  HttpCode,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import { TrackService } from './track.service';
import { CreateTrackDto } from './dto/create-track.dto';
import { UpdateTrackDto } from './dto/update-track.dto';
import { isUUID } from 'class-validator';

@Controller('track')
export class TrackController {
  constructor(private readonly trackService: TrackService) {}

  @Post()
  create(@Body() createTrackDto: CreateTrackDto) {
    return this.trackService.create(createTrackDto);
  }

  @Get()
  findAll() {
    return this.trackService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    if (!isUUID(id)) throw new BadRequestException('id is not uuid');
    const track = this.trackService.findOne(id);
    if (!track) throw new NotFoundException('track is not found');
    else return track;
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateTrackDto: UpdateTrackDto) {
    if (!isUUID(id)) throw new BadRequestException('id is not uuid');
    const track = this.trackService.update(id, updateTrackDto);
    if (!track) throw new NotFoundException('track is not found');
    else return track;
  }

  @Delete(':id')
  @HttpCode(204)
  remove(@Param('id') id: string) {
    if (!isUUID(id)) throw new BadRequestException('id is not uuid');
    const track = this.trackService.remove(id);
    if (!track) throw new NotFoundException('track is not found');
    else return track;
  }
}
