import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

const users: User[] = [];

@Injectable()
export class UserService {
  create(createUserDto: CreateUserDto) {
    let newUser = new User(createUserDto.login, createUserDto.password);
    users.push(newUser);
    return newUser;
  }

  findAll() {
    return users;
  }

  findOne(id: string) {
    let user = users.filter((use) => use.id === id)[0];
    return user;
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    const user = users.filter((use) => use.id === id)[0];
    if (!user) return user;
    user.password = updateUserDto.newPassword;
    return user;
  }

  remove(id: string) {
    const user = users.filter((use) => use.id === id)[0];
    if (!user) return user;
    users.splice(users.indexOf(user), 1);
    return user;
  }
}
