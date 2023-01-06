import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';

import { Message } from './entities/message.entity';
import { Chat } from './entities/chat.entity';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [TypeOrmModule.forFeature([User, Message, Chat]), HttpModule],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
