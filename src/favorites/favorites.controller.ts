import {
  Controller,
  Get,
  Post,
  Param,
  Delete,
  BadRequestException,
  NotFoundException,
  HttpStatus,
  HttpException,
  HttpCode,
} from '@nestjs/common';
import { FavoritesService } from './favorites.service';
import { isUUID } from 'class-validator';

@Controller('favs')
export class FavoritesController {
  constructor(private readonly favoritesService: FavoritesService) {}

  @Get()
  async findAll() {
    return await this.favoritesService.findAll();
  }

  @Post('track/:id')
  async addTrack(@Param('id') id: string) {
    if (!isUUID(id)) throw new BadRequestException('id is not uuid');
    const track = await this.favoritesService.addTrack(id);
    if (!track)
      throw new HttpException(
        'track is not found',
        HttpStatus.UNPROCESSABLE_ENTITY,
      );
    else return track;
  }

  @Delete('track/:id')
  @HttpCode(204)
  async removeTrack(@Param('id') id: string) {
    if (!isUUID(id)) throw new BadRequestException('id is not uuid');
    const isDeleted = await this.favoritesService.removeTrack(id);
    if (!isDeleted) throw new NotFoundException('track is not favorite');
    else return 'deleted';
  }

  @Post('album/:id')
  async addAlbum(@Param('id') id: string) {
    if (!isUUID(id)) throw new BadRequestException('id is not uuid');
    const album = await this.favoritesService.addAlbum(id);
    if (!album)
      throw new HttpException(
        'album is not found',
        HttpStatus.UNPROCESSABLE_ENTITY,
      );
    else return album;
  }

  @Delete('album/:id')
  @HttpCode(204)
  async removeAlbum(@Param('id') id: string) {
    if (!isUUID(id)) throw new BadRequestException('id is not uuid');
    const isDeleted = await this.favoritesService.removeAlbum(id);
    if (!isDeleted) throw new NotFoundException('track is not favorite');
    else return 'deleted';
  }

  @Post('artist/:id')
  async addArtist(@Param('id') id: string) {
    if (!isUUID(id)) throw new BadRequestException('id is not uuid');
    const artist = await this.favoritesService.addArtist(id);
    if (!artist)
      throw new HttpException(
        'artist is not found',
        HttpStatus.UNPROCESSABLE_ENTITY,
      );
    else return artist;
  }

  @Delete('artist/:id')
  @HttpCode(204)
  async removeArtist(@Param('id') id: string) {
    if (!isUUID(id)) throw new BadRequestException('id is not uuid');
    const isDeleted = await this.favoritesService.removeArtist(id);
    if (!isDeleted) throw new NotFoundException('track is not favorite');
    else return 'deleted';
  }
}
