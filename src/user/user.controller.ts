import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  BadRequestException,
  NotFoundException,
  HttpCode,
  ForbiddenException,
  Put,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { isUUID } from 'class-validator';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    if (!isUUID(id)) throw new BadRequestException('id is not uuid');
    const user = this.userService.findOne(id);
    if (!user) throw new NotFoundException('user is not found');
    else return user;
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    if (!isUUID(id)) throw new BadRequestException('id is not uuid');
    const user = this.userService.update(id, updateUserDto);
    if (!user) throw new NotFoundException('user is not found');
    if (user === 'wrong password')
      throw new ForbiddenException('old password is wrong');
    else return user;
  }

  @Delete(':id')
  @HttpCode(204)
  remove(@Param('id') id: string) {
    if (!isUUID(id)) throw new BadRequestException('id is not uuid');
    const user = this.userService.remove(id);
    if (!user) throw new NotFoundException('user is not found');
    else return 'deleted';
  }
}
