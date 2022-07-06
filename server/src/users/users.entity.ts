import { Comments } from 'src/comments/comments.entity';
import { Downvotes } from 'src/downvotes/downvotes.entity';
import { Groups } from 'src/groups/groups.entity';
import { Posts } from 'src/posts/posts.entity';
import { Upvotes } from 'src/upvotes/upvotes.entity';
import {
  BaseEntity,
  Entity,
  Column,
  PrimaryColumn,
  OneToMany,
  ManyToOne,
} from 'typeorm';

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

  @ManyToOne(() => Groups, (groups) => groups.users)
  groups: Groups;

  @OneToMany(() => Comments, (comment) => comment.user)
  comments: Comments[];

  @OneToMany(() => Upvotes, (upvote) => upvote.user)
  upvotes: Upvotes[];

  @OneToMany(() => Downvotes, (downvote) => downvote.user)
  downvotes: Downvotes[];
}
