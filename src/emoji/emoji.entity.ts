import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Emoji {
  // Internally referenced ID
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  icon: string;

  // ? These could probably be ENUMS
  @Column()
  parent_cat: string;

  // ? These could probably be ENUMS
  @Column()
  child_cat: string;

  @Column()
  short_name: string;
}
