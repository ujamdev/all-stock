import { Module } from '@nestjs/common';
import { FindCalculateController } from './presentation/find.calculate.controller';
import { FindCalculateService } from './application/find.calculate.service';

@Module({
  controllers: [FindCalculateController],
  providers: [FindCalculateService],
})
export class CalculateModule {}
