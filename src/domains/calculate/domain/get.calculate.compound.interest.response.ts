//TODO 단리 계산 API, 복리 계산 API에서 모두 해당 DTO로 사용 가능하여 통일하여 사용중. 추후에 클래스명 변경 필요
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
