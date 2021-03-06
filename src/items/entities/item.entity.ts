import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Item {
  // Internally referenced ID
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  emoji: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  tickets: number;

  // @ManyToOne((_type) => User, (user) => user.jobs, { eager: false })
  // @Exclude({ toPlainOnly: true })
  // user: User;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;
}
