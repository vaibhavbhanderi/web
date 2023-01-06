import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as hbs from 'hbs';
import { join } from 'path';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const http = await NestFactory.create<NestExpressApplication>(AppModule);
  http.setBaseViewsDir(join(__dirname, '..', 'templete/public'));
  http.useStaticAssets(join(__dirname, '..', 'client'));
  http.setViewEngine('hbs');
  hbs.registerPartials(join(__dirname, '..', 'templete/partials'));
  await http.listen(3000);
}

bootstrap();
