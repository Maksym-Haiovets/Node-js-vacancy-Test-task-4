import { NestFactory } from '@nestjs/core';
import { AppModule } from './App/app.module';

require('dotenv').config()
const PORT = process.env.SERVER_PORT || 3000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(PORT);
}
bootstrap();
