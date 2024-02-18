export class GetCalculateCompoundInterestResponse {
  period: string;
  revenue: number;
  amount: number;
  revenueRate: string;

  static of(
    calculate: GetCalculateCompoundInterestResponse,
  ): GetCalculateCompoundInterestResponse {
    const response = new GetCalculateCompoundInterestResponse();

    response.period = calculate.period;
    response.revenue = calculate.revenue;
    response.amount = calculate.amount;
    response.revenueRate = calculate.revenueRate;

    return response;
  }
}
