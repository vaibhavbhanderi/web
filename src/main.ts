import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import *as hbs from 'hbs';
import { join } from 'path';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.setBaseViewsDir(join(__dirname, '..', 'templete/public'));
  app.useStaticAssets(join(__dirname, '..', 'client'))
  app.setViewEngine('hbs');
  hbs.registerPartials(join(__dirname, '..', 'templete/partials'));
  await app.listen(3000);
}

bootstrap();