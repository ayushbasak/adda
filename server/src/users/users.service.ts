import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import usersDTO from './dto/users.dto';
import { Users } from './users.entity';
import { UsersRepository } from './users.repository';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UsersRepository)
    private usersRepository: UsersRepository,
  ) {}
  createUser(userDTO: usersDTO) {
    this.usersRepository.createUser(userDTO);
  }

  getUsers(): Promise<Users[]> {
    console.log(this.usersRepository);
    return this.usersRepository.getUsers();
  }
}
