import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  OneToMany,
} from 'typeorm';
import { Chat } from './chat.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  Name: string;

  @Column()
  Email: string;

  @Column()
  Password: string;

  @CreateDateColumn()
  createAt: Date;

  @OneToMany(() => Chat, (chat) => chat.user, { eager: true })
  Members: Chat[];
}
