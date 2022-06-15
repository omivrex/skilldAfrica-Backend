import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  const PORT = Number(process.env.PORT) || 8080;
  await app.listen(PORT);
}
bootstrap();
