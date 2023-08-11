import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { db } from '../fake-db';

@Injectable()
export class UserService {
  create(createUserDto: CreateUserDto) {
    return db.createUser(createUserDto);
  }

  findAll() {
    return db.findAllUsers();
  }

  findOne(id: string) {
    return db.findOneUser(id);
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return db.updateUser(id, updateUserDto);
  }

  remove(id: string) {
    return db.removeUser(id);
  }
}
