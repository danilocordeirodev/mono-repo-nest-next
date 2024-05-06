/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import {
  BadRequestException,
  Logger,
  ValidationError,
  ValidationPipe,
} from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app/app.module';
import { FastifyAdapter } from '@nestjs/platform-fastify';
import helmet from 'helmet';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, new FastifyAdapter());
  const globalPrefix = 'api';
  const isProduction = process.env.NODE_ENV === 'production';

  const developmentContentSecurityPolicy = {
    directives: {
      scriptSrc: [
        "'self'",
        "'unsafe-inline'",
        "'unsafe-eval'",
        'https:///unpkg.com/',
      ],
    },
  };

  app.use(
    helmet({
      contentSecurityPolicy: developmentContentSecurityPolicy,
    })
  );

  app.enableCors({
    origin: true,
  });
  app.useGlobalPipes(
    new ValidationPipe({
      skipMissingProperties: true,
      //whitelist: true,
      transform: true,
      transformOptions: { enableImplicitConversion: true },
    })
  );
  app.setGlobalPrefix(globalPrefix);
  const port = process.env.PORT || 3333;
  await app.listen(port);
  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`
  );
  Logger.log(`🚀 Application is running on: http://localhost:${port}/graphiql`);
}

bootstrap();
