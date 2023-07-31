import { PartialType } from '@nestjs/mapped-types';
import { CreateAlbumDto } from './create-album.dto';

export class UpdateAlbumDto extends PartialType(CreateAlbumDto) {
    name: string | null;
    year: number | null;
    artistId: string | null; // refers to Artist
}
