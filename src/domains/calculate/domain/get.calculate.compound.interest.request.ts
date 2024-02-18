import { IsEnum, IsNotEmpty, IsNumber } from 'class-validator';
import { Type } from 'class-transformer';
import { PeriodUnit } from './enum/period.unit';

export class GetCalculateCompoundInterestRequest {
  @IsNumber()
  @Type(() => Number)
  @IsNotEmpty()
  investmentAmount: number;

  @IsEnum(PeriodUnit)
  @IsNotEmpty()
  periodUnit: PeriodUnit;

  @IsNumber()
  @Type(() => Number)
  @IsNotEmpty()
  period: number;

  @IsNumber()
  @Type(() => Number)
  @IsNotEmpty()
  revenueRate: number;
}
