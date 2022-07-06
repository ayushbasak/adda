import { BaseEntity, Entity, PrimaryColumn, Column } from 'typeorm';
@Entity('upvotes')
export class Upvotes extends BaseEntity {
  @PrimaryColumn()
  id: string;

  @Column()
  createdAt: Date;
}
