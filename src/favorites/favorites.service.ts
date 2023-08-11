import { Injectable } from '@nestjs/common';
import { db } from '../fake-db';

@Injectable()
export class FavoritesService {
  findAll() {
    return db.findAllFavorites();
  }

  addTrack(id: string) {
    return db.addTrackToF(id);
  }

  removeTrack(id: string) {
    return db.removeTrackFromF(id);
  }

  addAlbum(id: string) {
    return db.addAlbumToF(id);
  }

  removeAlbum(id: string) {
    return db.removeAlbumFromF(id);
  }

  addArtist(id: string) {
    return db.addArtistToF(id);
  }

  removeArtist(id: string) {
    return db.removeArtistFromF(id);
  }
}
