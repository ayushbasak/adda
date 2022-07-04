import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { UsersService } from './users.service';
import UsersDTO from './dto/users.dto';
import { Users } from './interface/users.interface';
@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post()
  async createUser(@Body() usersDTO: UsersDTO) {
    this.usersService.createUser(usersDTO);
  }

  @Get()
  findUsers(@Req() req): Promise<Users[]> {
    return this.usersService.getUsers();
  }
}
