import { PartialType } from '@nestjs/mapped-types';
import { CreateAlbumDto } from './create-album.dto';
import { IsNumber } from 'class-validator';

export class UpdateAlbumDto extends PartialType(CreateAlbumDto) {
  name: string;
  @IsNumber()
  year: number;
  artistId: string | null; // refers to Artist
}
