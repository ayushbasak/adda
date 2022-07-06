import { BaseEntity, Entity, PrimaryColumn, Column } from 'typeorm';
@Entity('downvotes')
export class Downvotes extends BaseEntity {
  @PrimaryColumn()
  id: string;

  @Column()
  createdAt: Date;
}
