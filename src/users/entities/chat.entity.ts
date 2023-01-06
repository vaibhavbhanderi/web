import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
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
}
