import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import usersDTO from './dto/users.dto';
import { Users } from './users.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private usersRepository: Repository<Users>,
  ) {}
  createUser(userDTO: usersDTO) {
    this.usersRepository.insert(userDTO);
  }

  getUsers(): Promise<Users[]> {
    console.log(this.usersRepository);
    return this.usersRepository.find();
  }
}
