import { BaseEntity, Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('users')
export class Users extends BaseEntity {
  @PrimaryColumn()
  id: string;

  @Column()
  username: string;
}
