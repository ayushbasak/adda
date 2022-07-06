import { BaseEntity, Entity, PrimaryColumn, Column } from 'typeorm';
@Entity('comments')
export class Comments extends BaseEntity {
  @PrimaryColumn()
  id: string;

  @Column()
  content: string;

  @Column()
  createdAt: Date;
}
