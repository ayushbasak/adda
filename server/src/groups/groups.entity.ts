import { BaseEntity, Entity, PrimaryColumn, Column } from 'typeorm';
@Entity('groups')
export class Groups extends BaseEntity {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  //TODO Posts, admin, subscribed users

  @Column()
  subscriber_count: number;
}
