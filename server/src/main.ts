import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  try {
    const PORT = process.env.PORT || 5000;
    const app = await NestFactory.create(AppModule);
    app.enableCors({
      origin: [
        'http://localhost:3000',
        'https://music-platform-ten.vercel.app',
      ],
      methods: ['POST', 'PUT', 'DELETE', 'GET'],
    });
    await app.listen(PORT, () => console.log(`server started on PORT ${PORT}`));
  } catch (e) {
    console.log(e);
  }
}
bootstrap();
