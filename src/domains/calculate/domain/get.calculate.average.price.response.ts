export class GetCalculateAveragePriceResponse {
  averagePrice: number;
  quantity: number;
  purchasePrice: number;

  static of(
    calculate: GetCalculateAveragePriceResponse,
  ): GetCalculateAveragePriceResponse {
    const response = new GetCalculateAveragePriceResponse();

    response.averagePrice = calculate.averagePrice;
    response.quantity = calculate.quantity;
    response.purchasePrice = calculate.purchasePrice;

    return response;
  }
}
