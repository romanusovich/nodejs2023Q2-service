import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { db } from '../fake-db';
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

@Injectable()
export class UserService {
  async create(createUserDto: CreateUserDto) {
    return await prisma.user.create({
      data: createUserDto,
    })
  }

  async findAll() {
    return await prisma.user.findMany();
  }

  async findOne(id: string) {
    return await prisma.user.findFirst({
      where: {
        id: id,
      }
    });
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const user = await this.findOne(id);
    if (!user) return null;
    if (user?.password !== updateUserDto.oldPassword) throw new Error('wrong password');
    return await prisma.user.update({
      where: {
        id: id,
      },
      data: {
        password: updateUserDto.newPassword,
      }
    });
  }

  async remove(id: string) {
    const user = await this.findOne(id);
    if (!user) return null;
    return await prisma.user.delete({
      where: {
        id: id,
      }
    });
  }
}
