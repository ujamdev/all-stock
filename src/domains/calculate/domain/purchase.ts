import { IsNotEmpty, IsNumber } from 'class-validator';

export class Purchase {
  @IsNumber()
  @IsNotEmpty()
  price: number;

  @IsNumber()
  @IsNotEmpty()
  quantity: number;
}
