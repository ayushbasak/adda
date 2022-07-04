import { BaseEntity, Entity, Column } from 'typeorm';

@Entity('users')
export class Users extends BaseEntity {
  @Column()
  id: string;

  @Column()
  username: string;
}
