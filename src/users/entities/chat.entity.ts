import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Message } from './message.entity';
import { User } from './user.entity';

@Entity()
export class Chat {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  Senderid: string;
  @Column()
  Receiverid: string;
  @ManyToOne(() => User, (user) => user.Members)
  user: User;
  // @OneToMany(() => Message, (message) => message.Message, { eager: true })
  // Messages: Message[];
}
