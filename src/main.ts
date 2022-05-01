import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { TransformInterceptor } from './transform.interceptor';
import { Logger } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const logger = new Logger();
  const port = process.env.PORT;

  const app = await NestFactory.create(AppModule);

  // Setup Swagger
  const config = new DocumentBuilder()
    .setTitle('Emoji Swagger')
    .setDescription('API Documentation for Emoji Games')
    .setVersion('1.0')
    .addTag('emoji')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  // TODO: Http Only cookies https://www.learmoreseekmore.com/2021/04/part-1-vuejs-jwt-auth-cookie-access-token-usage.html
  app.enableCors();
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalInterceptors(new TransformInterceptor());
  app.setGlobalPrefix('v1');

  await app.listen(port);
  logger.log(`App listening on port ${port}`);
}
bootstrap();
