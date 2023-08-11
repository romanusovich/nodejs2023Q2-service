import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  HttpCode,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import { ArtistService } from './artist.service';
import { CreateArtistDto } from './dto/create-artist.dto';
import { UpdateArtistDto } from './dto/update-artist.dto';
import { isUUID } from 'class-validator';

@Controller('artist')
export class ArtistController {
  constructor(private readonly artistService: ArtistService) {}

  @Post()
  create(@Body() createArtistDto: CreateArtistDto) {
    return this.artistService.create(createArtistDto);
  }

  @Get()
  findAll() {
    return this.artistService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    if (!isUUID(id)) throw new BadRequestException('id is not uuid');
    const artist = this.artistService.findOne(id);
    if (!artist) throw new NotFoundException('artist is not found');
    else return artist;
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateArtistDto: UpdateArtistDto) {
    if (!isUUID(id)) throw new BadRequestException('id is not uuid');
    const artist = this.artistService.update(id, updateArtistDto);
    if (!artist) throw new NotFoundException('artist is not found');
    else return artist;
  }

  @Delete(':id')
  @HttpCode(204)
  remove(@Param('id') id: string) {
    if (!isUUID(id)) throw new BadRequestException('id is not uuid');
    const artist = this.artistService.remove(id);
    if (!artist) throw new NotFoundException('artist is not found');
    else return 'deleted';
  }
}
