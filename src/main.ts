import { NestFactory } from '@nestjs/core';
import { Logger, ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const logger = new Logger('main');
  app.setGlobalPrefix('api');
  
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    })

  );

  const config = new DocumentBuilder()
    .setTitle('Pokemon restFul API')
    .setDescription('Pokemon Api endpoints')
    .setVersion('1.0')
    .build();

    const document = SwaggerModule.createDocument(app,config);
    SwaggerModule.setup('api', app, document);
  
  await app.listen(process.env.PORT);
  logger.log(`app running on port ${process.env.PORT}`)
}
bootstrap();
