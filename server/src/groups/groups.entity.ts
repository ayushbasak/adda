import { Posts } from 'src/posts/posts.entity';
import { BaseEntity, Entity, PrimaryColumn, Column, OneToMany } from 'typeorm';
@Entity('groups')
export class Groups extends BaseEntity {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  //TODO Posts, admin, subscribed users
  @OneToMany(() => Posts, (post) => post.group)
  posts: Posts[];

  @Column()
  subscriber_count: number;
}
