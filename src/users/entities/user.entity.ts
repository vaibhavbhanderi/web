import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

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
}
