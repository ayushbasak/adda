import { Posts } from 'src/posts/posts.entity';
import { Users } from 'src/users/users.entity';
import { BaseEntity, Entity, PrimaryColumn, Column, OneToMany } from 'typeorm';
@Entity('groups')
export class Groups extends BaseEntity {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  admin: Users;

  @OneToMany(() => Posts, (post) => post.group)
  posts: Posts[];

  @OneToMany(() => Users, (user) => user.groups)
  users: Users[];

  @Column()
  subscriber_count: number;
}
