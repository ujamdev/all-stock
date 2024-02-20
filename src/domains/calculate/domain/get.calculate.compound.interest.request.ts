import { IsEnum, IsNotEmpty, IsNumber } from 'class-validator';
import { Type } from 'class-transformer';
import { PeriodUnit } from './enum/period.unit';

//TODO 단리 계산 API, 복리 계산 API에서 모두 해당 DTO로 사용 가능하여 통일하여 사용중. 추후에 클래스명 변경 필요
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
