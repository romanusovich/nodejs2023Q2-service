import { Injectable } from '@nestjs/common';
import { CreateArtistDto } from './dto/create-artist.dto';
import { UpdateArtistDto } from './dto/update-artist.dto';
import { db } from '../fake-db';

@Injectable()
export class ArtistService {
  create(createArtistDto: CreateArtistDto) {
    return db.createArtist(createArtistDto);
  }

  findAll() {
    return db.findAllArtists();
  }

  findOne(id: string) {
    return db.findOneArtist(id);
  }

  update(id: string, updateArtistDto: UpdateArtistDto) {
    return db.updateArtist(id, updateArtistDto);
  }

  remove(id: string) {
    return db.removeArtist(id);
  }
}
