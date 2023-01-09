import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Res,
  Req,
  Render,
  ParseIntPipe,
} from '@nestjs/common';
import { UsersService } from './users.service';

import { UpdateUserDto } from './dto/update-user.dto';
import { Request, Response } from 'express';
import { createchatdto } from './dto/create-chat.dto';
import { createmessagedto } from './dto/create-message.dto';

@Controller()
export class UsersController {
  [x: string]: any;
  constructor(
    private readonly usersService: UsersService ) {}
  @Get()
  @Render('home')
  Index() {
    return { message: 'welcome' };
  }

  @Post('/adduser')
  @Render('login')
  create(
    @Req()
    request: Request,
  ) {
    // console.log(request.body);
    return this.usersService.create(request.body);
  }

  @Post('/userlogin')
  @Render('message')
  Userlogin(
    @Req()
    request: Request,
    response: Response,
  ) {
    return this.usersService.finduser(request.body, response);
  }
  @Post(':id/chat')
  async createUserchat(
    @Param('id', ParseIntPipe) id: number,
    @Body() createUserchatdto: createchatdto,
  ) {
    return this.usersService.createUserChat(id, createUserchatdto);
  }

  @Post(':userid')
  async findmember(@Param('userid', ParseIntPipe) userid: number) {
    // console.log(userid);

    return this.usersService.findMember(userid);
  }

  @Post(':id/message')
  async createUsermessage(
    @Param('id', ParseIntPipe) id: number,
    @Body() createmessagedto:createmessagedto,
  ) {
    return this.usersService.createUserMessage(id, createmessagedto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
  @Get('userget')
  getUsers() {
    return this.usersService.allUser();
  }
}
