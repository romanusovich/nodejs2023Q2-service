import { Injectable } from '@nestjs/common';
import { CreateAlbumDto } from './dto/create-album.dto';
import { UpdateAlbumDto } from './dto/update-album.dto';
import {db} from '../fake-db';

@Injectable()
export class AlbumService {
  create(createAlbumDto: CreateAlbumDto) {
    return db.createAlbum(createAlbumDto);
  }

  findAll() {
    return db.findAllAlbums();
  }

  findOne(id: string) {
    return db.findOneAlbum(id);
  }

  update(id: string, updateAlbumDto: UpdateAlbumDto) {
    return db.updateAlbum(id, updateAlbumDto);
  }

  remove(id: string) {
    return db.removeAlbum(id);
  }
}
