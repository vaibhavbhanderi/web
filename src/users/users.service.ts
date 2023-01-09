import {
  HttpException,
  HttpStatus,
  Injectable,
  Redirect,
  Render,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateChatParams, CreateMessageParams } from 'src/utity/types';

import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Chat } from './entities/chat.entity';
import { Message } from './entities/message.entity';

import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
    @InjectRepository(Chat) private ChatRepository: Repository<Chat>,
    @InjectRepository(Message) private MessageRepository: Repository<Message>,
  ) {}
  create(body: CreateUserDto) {
    let user: User = new User();
    user.Name = body.Name;
    user.Email = body.Email;
    user.Password = body.Password;
    // console.log('???????????????????????', user);
    return this.usersRepository.save(user);
  }

  async finduser(body: any, response: any) {
    try {
      const Email = body.Email;
      console.log(Email);

      const result = await this.usersRepository.findOne({
        where: {
          Email: Email,
        },
      });
      // console.log(result);

      if (!result) {
        return 'invalid Credentials';
      }

      return result;
    } catch (error) {
      // console.log('>>>>>>>>>>', error);
    }
  }

  async createUserChat(id: number, createuserchatdetails: CreateChatParams) {
    const user = await this.usersRepository.findOneBy({ id });
    if (!user)
      throw new HttpException(
        'User not found cannot create chat',
        HttpStatus.BAD_REQUEST,
      );
    const newchat = this.ChatRepository.create({
      ...createuserchatdetails,
      user,
    });
    return this.ChatRepository.save(newchat);
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} user`;
  // }

  allUser() {
    return this.usersRepository.find();
  }

  findMember(userid: any) {
    console.log(userid);

    const member = this.usersRepository.findOne({
      where: {
        id: userid,
      },
    });
    return member;
  }

  async createUserMessage(
    id: number,
    createusermessagedetails: CreateMessageParams,
  ) {
    const chat = await this.ChatRepository.findOneBy({ id });
    if (!chat)
      throw new HttpException(
        'User not found cannot create message>>>>>>>>>>>',
        HttpStatus.BAD_REQUEST,
      );
    const newMessage = this.MessageRepository.create({
      ...createusermessagedetails
    });
    return this.ChatRepository.save(newMessage);
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
