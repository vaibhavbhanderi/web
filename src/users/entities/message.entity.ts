import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Chat } from './chat.entity';

@Entity()
export class Message {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  conversationid: string;
  @Column()
  sender: string;
  @Column()
  text: string;
  @Column()
  creteAt: Date;
//   @ManyToOne(() => Chat, (chat) => chat.Messages)
//   Message: Chat;
}
