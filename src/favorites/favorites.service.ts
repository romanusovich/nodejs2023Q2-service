import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

@Injectable()
export class FavoritesService {
  async findAll() {
    return {
      artists: await prisma.favoriteArtist.findMany({
        select: {
          artist: {
            select: {
              id: true,
              grammy: true,
              name: true,
            },
          },
        },
      }),
      albums: await prisma.favoriteAlbum.findMany({
        select: {
          album: {
            select: {
              id: true,
              name: true,
              year: true,
            },
          },
        },
      }),
      tracks: await prisma.favoriteTrack.findMany({
        select: {
          track: {
            select: {
              id: true,
              name: true,
              duration: true,
            },
          },
        },
      }),
    };
  }

  async addTrack(id: string) {
    return await prisma.favoriteTrack.create({
      data: {
        trackId: id,
      },
    });
  }

  async removeTrack(id: string) {
    return await prisma.favoriteTrack.delete({
      where: {
        trackId: id,
      },
    });
  }

  async addAlbum(id: string) {
    return await prisma.favoriteAlbum.create({
      data: {
        albumId: id,
      },
    });
  }

  async removeAlbum(id: string) {
    return await prisma.favoriteAlbum.delete({
      where: {
        albumId: id,
      },
    });
  }

  async addArtist(id: string) {
    return await prisma.favoriteArtist.create({
      data: {
        artistId: id,
      },
    });
  }

  async removeArtist(id: string) {
    return await prisma.favoriteArtist.delete({
      where: {
        artistId: id,
      },
    });
  }
}
