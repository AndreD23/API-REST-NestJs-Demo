import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {EntityNotFoundExceptionFilter} from "./exception-filter/entity-not-found.exception-filter";
import {HttpStatus, ValidationPipe} from "@nestjs/common";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new EntityNotFoundExceptionFilter())
  app.useGlobalPipes(new ValidationPipe({errorHttpStatusCode: HttpStatus.UNPROCESSABLE_ENTITY}))
  await app.listen(3000);
}
bootstrap();
