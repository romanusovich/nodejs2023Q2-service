import { Injectable } from '@nestjs/common';
import { CreateTrackDto } from './dto/create-track.dto';
import { UpdateTrackDto } from './dto/update-track.dto';
import { db } from '../fake-db';
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

@Injectable()
export class TrackService {
  async create(createTrackDto: CreateTrackDto) {
    return await prisma.track.create({
      data: createTrackDto
    });
  }

  async findAll() {
    return await prisma.track.findMany();
  }

  async findOne(id: string) {
    return await prisma.track.findFirst({
      where: {
        id: id
      }
    });
  }

  async update(id: string, updateTrackDto: UpdateTrackDto) {
    const track = await this.findOne(id);
    if (!track) return null;
    return await prisma.track.update({
      where: {
        id: id
      },
      data: updateTrackDto
    })
  }

  async remove(id: string) {
    const track = await this.findOne(id);
    if (!track) return null;
    return await prisma.track.delete({
      where: {
        id: id
      }
    })
  }
}
