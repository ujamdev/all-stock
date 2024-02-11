import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { Logger, ValidationPipe } from '@nestjs/common';
import { NestExpressApplication } from '@nestjs/platform-express';

class Server {
  private readonly configService: ConfigService;
  private readonly port;

  constructor(private readonly application: NestExpressApplication) {
    this.configService = application.get(ConfigService);
    this.port = this.configService.get('server.port') || 3000;
  }

  async bootstrap() {
    await this.application.listen(this.port);
    console.log(`listening on port ${this.port}`);
  }
}

async function initialize(): Promise<void> {
  const application = await NestFactory.create<NestExpressApplication>(
    AppModule,
  );

  application.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      forbidUnknownValues: false,
      transform: true,
    }),
  );

  const server = new Server(application);

  await server.bootstrap();
}

initialize().catch((error) => Logger.error(error));
