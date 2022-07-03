import { Repository } from 'typeorm';
import { Users } from './users.entity';
import UsersDTO from './dto/users.dto';

// @EntityRepository('UsersRepository')
export class UsersRepository extends Repository<Users> {
  async getUsers(usersDTO: UsersDTO): Promise<Users[]> {
    return this.find({
      where: {
        id: usersDTO.id,
        username: usersDTO.username,
      },
    });
  }
}
