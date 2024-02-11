import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import globalConfig from './commons/config/global.config';
import { CalculateModule } from './domains/calculate/calculate.module';

@Module({
  imports: [
    ConfigModule.forRoot({ load: [globalConfig], isGlobal: true }),
    CalculateModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
