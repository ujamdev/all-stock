import { IsNotEmpty, IsNumber } from 'class-validator';
import { Type } from 'class-transformer';

export class GetCalculateQuantityRequest {
  @IsNumber()
  @Type(() => Number)
  @IsNotEmpty()
  stockPrice: number;

  @IsNumber()
  @Type(() => Number)
  @IsNotEmpty()
  purchasePrice: number;
}
