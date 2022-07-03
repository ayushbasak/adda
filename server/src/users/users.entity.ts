import { BaseEntity, Entity, Column } from 'typeorm';

@Entity()
export class Users extends BaseEntity {
  @Column()
  id: string;

  @Column()
  username: string;
}
