import { Posts } from 'src/posts/posts.entity';
import { Users } from 'src/users/users.entity';
import { BaseEntity, Entity, PrimaryColumn, Column, ManyToOne } from 'typeorm';
@Entity('downvotes')
export class Downvotes extends BaseEntity {
  @PrimaryColumn()
  id: string;

  @ManyToOne(() => Users, (user) => user.downvotes)
  user: Users;

  @ManyToOne(() => Posts, (post) => post.downvotes)
  post: Posts;

  @Column()
  createdAt: Date;
}
