import { Controller, Get, Post, Render } from '@nestjs/common';

@Controller()
export class AppController {
 
  @Get('message')
  @Render('message')
  message() {
    return { message: 'welcome' };
  }
}
