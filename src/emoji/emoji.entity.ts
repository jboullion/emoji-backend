import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Emoji {
  // Internally referenced ID
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  icon: string;

  @Column()
  parent_cat: string;

  @Column()
  child_cat: string;

  @Column()
  short_name: string;
}
