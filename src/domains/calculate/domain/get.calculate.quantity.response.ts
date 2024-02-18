export class GetCalculateQuantityResponse {
  quantity: number;
  purchasePrice: number;

  static of(
    calculate: GetCalculateQuantityResponse,
  ): GetCalculateQuantityResponse {
    const response = new GetCalculateQuantityResponse();

    response.quantity = calculate.quantity;
    response.purchasePrice = calculate.purchasePrice;

    return response;
  }
}
