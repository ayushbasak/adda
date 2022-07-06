import { Posts } from 'src/posts/posts.entity';
import { BaseEntity, Entity, Column, PrimaryColumn, OneToMany } from 'typeorm';

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

  @OneToMany(() => Posts, (post) => post.user)
  posts: Posts[];
}
