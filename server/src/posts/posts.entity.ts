import { Comments } from 'src/comments/comments.entity';
import { Downvotes } from 'src/downvotes/downvotes.entity';
import { Groups } from 'src/groups/groups.entity';
import { Upvotes } from 'src/upvotes/upvotes.entity';
import { Users } from 'src/users/users.entity';
import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryColumn,
} from 'typeorm';
@Entity('posts')
export class Posts extends BaseEntity {
  @PrimaryColumn()
  id: string;

  @ManyToOne(() => Users, (user) => user.posts)
  user: Users;

  @ManyToOne(() => Groups, (group) => group.posts)
  group: Groups;

  @OneToMany(() => Comments, (comment) => comment.post)
  comments: Comments[];

  @OneToMany(() => Upvotes, (upvote) => upvote.post)
  upvotes: Upvotes[];

  @OneToMany(() => Downvotes, (downvote) => downvote.post)
  downvotes: Downvotes[];

  @Column()
  content: string;

  @Column()
  created_at: Date;

  @Column()
  updated_at: Date;
}
