import { Injectable } from '@nestjs/common';
import { db } from '../fake-db';
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

@Injectable()
export class FavoritesService {
  async findAll() {
    return {
      artists: await prisma.favoriteArtist.findMany(),
      albums: await prisma.favoriteAlbum.findMany(),
      tracks: await prisma.favoriteTrack.findMany(),
    }
  }

  async addTrack(id: string) {
    return await prisma.favoriteTrack.create({
      data: {
        trackId: id
      }
    })
  }

  async removeTrack(id: string) {
    return await prisma.favoriteTrack.delete({
      where: {
        trackId: id
      }
    })
  }

  async addAlbum(id: string) {
    return await prisma.favoriteAlbum.create({
      data: {
        albumId: id
      }
    })
  }

  async removeAlbum(id: string) {
    return await prisma.favoriteAlbum.delete({
      where: {
        albumId: id
      }
    })
  }

  async addArtist(id: string) {
    return await prisma.favoriteArtist.create({
      data: {
        artistId: id
      }
    })
  }

  async removeArtist(id: string) {
    return await prisma.favoriteArtist.delete({
      where: {
        artistId: id
      }
    })
  }
}
