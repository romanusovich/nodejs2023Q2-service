import { Injectable } from '@nestjs/common';
import { CreateTrackDto } from './dto/create-track.dto';
import { UpdateTrackDto } from './dto/update-track.dto';
import { db } from '../fake-db';

@Injectable()
export class TrackService {
  create(createTrackDto: CreateTrackDto) {
    return db.createTrack(createTrackDto);
  }

  findAll() {
    return db.findAllTracks();
  }

  findOne(id: string) {
    return db.findOneTrack(id);
  }

  update(id: string, updateTrackDto: UpdateTrackDto) {
    return db.updateTrack(id, updateTrackDto);
  }

  remove(id: string) {
    return db.removeTrack(id);
  }
}
