import { BaseEntity, Column, Entity, PrimaryColumn } from 'typeorm';
@Entity('posts')
export class Posts extends BaseEntity {
  @PrimaryColumn()
  id: string;

  @Column()
  content: string;

  @Column()
  created_at: Date;

  @Column()
  updated_at: Date;
}
