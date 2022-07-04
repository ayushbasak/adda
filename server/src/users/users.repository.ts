import { Repository } from 'typeorm';
import { Users } from './users.entity';
import UsersDTO from './dto/users.dto';

export class UsersRepository extends Repository<Users> {
  async createUser(usersDTO: UsersDTO): Promise<Users> {
    const user = new Users();
    user.id = usersDTO.id;
    user.username = usersDTO.username;
    return await this.save(user);
  }

  async getUsers(): Promise<Users[]> {
    return this.find();
  }
}
