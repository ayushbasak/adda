import { Groups } from 'src/groups/groups.entity';
import { Users } from 'src/users/users.entity';
import { BaseEntity, Column, Entity, ManyToOne, PrimaryColumn } from 'typeorm';
@Entity('posts')
export class Posts extends BaseEntity {
  @PrimaryColumn()
  id: string;

  @ManyToOne(() => Users, (user) => user.posts)
  user: Users;

  @ManyToOne(() => Groups, (group) => group.posts)
  group: Groups;

  @Column()
  content: string;

  @Column()
  created_at: Date;

  @Column()
  updated_at: Date;
}
