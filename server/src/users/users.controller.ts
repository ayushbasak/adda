import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { UsersService } from './users.service';
import UsersDTO from './dto/users.dto';
import { Users } from './interface/users.interface';
@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post()
  async create(@Body() usersDTO: UsersDTO) {
    this.usersService.create(usersDTO);
  }

  @Get()
  findAll(@Req() req): Users[] {
    return this.usersService.findAll();
  }
}
