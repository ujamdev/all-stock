import { IsArray, ValidateNested } from 'class-validator';
import { Purchase } from './purchase';
import { plainToClass, Transform, Type } from 'class-transformer';

export class GetCalculateAveragePriceRequest {
  @IsArray()
  @Transform(({ value }) => plainToClass(Purchase, JSON.parse(value)))
  @ValidateNested({ each: true })
  @Type(() => Purchase)
  purchaseList: Purchase[];
}
