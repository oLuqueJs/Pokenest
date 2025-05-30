import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT
  await app.listen(port ?? 3000);

  console.log(`Hello World! Pokenest is running at localhost:${port}`)
}
bootstrap();
