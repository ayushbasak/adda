import { Posts } from 'src/posts/posts.entity';
import { Users } from 'src/users/users.entity';
import { BaseEntity, Entity, PrimaryColumn, Column, ManyToOne } from 'typeorm';
@Entity('comments')
export class Comments extends BaseEntity {
  @PrimaryColumn()
  id: string;

  @Column()
  content: string;

  @ManyToOne(() => Users, (user) => user.comments)
  user: Users;

  @ManyToOne(() => Posts, (post) => post.comments)
  post: Posts;

  @Column()
  createdAt: Date;

  @Column()
  updatedAt: Date;
}
