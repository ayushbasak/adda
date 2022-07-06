import { Posts } from 'src/posts/posts.entity';
import { Users } from 'src/users/users.entity';
import { BaseEntity, Entity, PrimaryColumn, Column, ManyToOne } from 'typeorm';
@Entity('upvotes')
export class Upvotes extends BaseEntity {
  @PrimaryColumn()
  id: string;

  @ManyToOne(() => Users, (user) => user.upvotes)
  user: Users;

  @ManyToOne(() => Posts, (post) => post.upvotes)
  post: Posts;

  @Column()
  createdAt: Date;
}
