import { BaseEntity, Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('users')
export class Users extends BaseEntity {
  @PrimaryColumn()
  id: string;

  @Column()
  username: string;

  @Column()
  hash: string;

  @Column()
  avatar_link: string;

  @Column()
  ijjat: number;
}
