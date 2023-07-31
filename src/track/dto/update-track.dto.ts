import { PartialType } from '@nestjs/mapped-types';
import { CreateTrackDto } from './create-track.dto';
import { IsNumber } from 'class-validator';

export class UpdateTrackDto extends PartialType(CreateTrackDto) {
  name: string;
  artistId: string | null; // refers to Artist
  albumId: string | null; // refers to Album
  @IsNumber()
  duration: number; // integer number
}
