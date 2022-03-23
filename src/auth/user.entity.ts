import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { UserStatus } from './user-status.enum';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  // Publicly referenced ID
  @Column()
  uuid: string;

  @Column({ unique: true })
  email: string;

  @Column({ unique: true })
  username: string;

  @Column()
  password: string;

  @Column()
  tickets: number;

  @Column()
  premium_tickets: number;

  @Column()
  premium: boolean;

  @Column({ nullable: true })
  refreshToken: string;

  @Column({ nullable: true })
  @CreateDateColumn()
  refreshTokenExpires: Date;

  @Column({ default: UserStatus.UNACTIVATED })
  status: UserStatus;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;
}
