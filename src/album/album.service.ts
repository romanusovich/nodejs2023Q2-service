import { Injectable } from '@nestjs/common';
import { CreateAlbumDto } from './dto/create-album.dto';
import { UpdateAlbumDto } from './dto/update-album.dto';
import { db } from '../fake-db';
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

@Injectable()
export class AlbumService {
  async create(createAlbumDto: CreateAlbumDto) {
    return await prisma.album.create({
      data: createAlbumDto
    });
  }

  async findAll() {
    return await prisma.album.findMany();
  }

  async findOne(id: string) {
    return await prisma.album.findFirst({
      where: {
        id: id
      }
    })
  }

  async update(id: string, updateAlbumDto: UpdateAlbumDto) {
    return await prisma.album.update({
      where: {
        id: id
      },
      data: updateAlbumDto
    })
  }

  async remove(id: string) {
    return await prisma.album.delete({
      where: {
        id: id
      }
    })
  }
}
