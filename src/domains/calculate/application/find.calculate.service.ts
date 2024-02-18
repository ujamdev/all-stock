import { BadRequestException, Injectable } from '@nestjs/common';
import { GetCalculateAveragePriceRequest } from '../domain/get.calculate.average.price.request';
import { GetCalculateAveragePriceResponse } from '../domain/get.calculate.average.price.response';
import { GetCalculateQuantityRequest } from '../domain/get.calculate.quantity.request';
import { GetCalculateQuantityResponse } from '../domain/get.calculate.quantity.response';

@Injectable()
export class FindCalculateService {
  async getCalculateAveragePrice(
    request: GetCalculateAveragePriceRequest,
  ): Promise<GetCalculateAveragePriceResponse> {
    if (request.purchaseList.length < 1)
      throw new BadRequestException('단가와 수량을 입력해주세요.');

    return this.calculateAveragePrice(request);
  }

  async getCalculateQuantity(
    request: GetCalculateQuantityRequest,
  ): Promise<GetCalculateQuantityResponse> {
    const { purchasePrice, stockPrice } = request;
    const quantity = Math.floor(purchasePrice / stockPrice);

    return GetCalculateQuantityResponse.of({
      purchasePrice: quantity * stockPrice,
      quantity,
    });
  }

  private calculateAveragePrice(
    request: GetCalculateAveragePriceRequest,
  ): GetCalculateAveragePriceResponse {
    let totalPurchasePrice = 0;
    let totalQuantity = 0;

    for (const purchase of request.purchaseList) {
      totalPurchasePrice += purchase.price * purchase.quantity;
      totalQuantity += purchase.quantity;
    }

    return GetCalculateAveragePriceResponse.of({
      averagePrice: +(totalPurchasePrice / totalQuantity).toFixed(2),
      quantity: totalQuantity,
      purchasePrice: totalPurchasePrice,
    });
  }
}
