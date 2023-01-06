import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
}
