import { Injectable } from '@nestjs/common';
import { Users } from './interface/users.interface';

@Injectable()
export class UsersService {
  private readonly users: Users[] = [
    { id: 'ayushbasak', username: 'ayushbasak' },
  ];

  create(user: Users) {
    this.users.push(user);
  }

  findAll(): Users[] {
    return this.users;
  }
}
