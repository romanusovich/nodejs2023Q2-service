import { Injectable } from '@nestjs/common';
import { CreateArtistDto } from './dto/create-artist.dto';
import { UpdateArtistDto } from './dto/update-artist.dto';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

@Injectable()
export class ArtistService {
  async create(createArtistDto: CreateArtistDto) {
    return await prisma.artist.create({
      data: createArtistDto,
    });
  }

  async findAll() {
    return await prisma.artist.findMany();
  }

  async findOne(id: string) {
    return await prisma.artist.findFirst({
      where: {
        id: id,
      },
    });
  }

  async update(id: string, updateArtistDto: UpdateArtistDto) {
    const artist = await this.findOne(id);
    if (!artist) return null;
    return await prisma.artist.update({
      where: {
        id: id,
      },
      data: updateArtistDto,
    });
  }

  async remove(id: string) {
    const artist = await this.findOne(id);
    if (!artist) return null;
    return await prisma.artist.delete({
      where: {
        id: id,
      },
    });
  }
}
