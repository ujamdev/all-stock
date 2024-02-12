import { Controller, Get, Query } from '@nestjs/common';
import { FindCalculateService } from '../application/find.calculate.service';
import { GetCalculateAveragePriceRequest } from '../domain/get.calculate.average.price.request';
import { GetCalculateAveragePriceResponse } from '../domain/get.calculate.average.price.response';

@Controller('calculate')
export class FindCalculateController {
  constructor(private readonly findCalculateService: FindCalculateService) {}

  /**
   * 보유 주식 평균단가, 수량, 매입금액을 계산한다.
   * @param {GetCalculateAveragePriceRequest} request - 평균 단가 계산에 필요한 요청 데이터
   * @return {Promise<GetCalculateAveragePriceResponse>} - 평균 단가 계산 결과 응답 데이터
   */
  @Get('average-price')
  async getCalculateAveragePrice(
    @Query() request: GetCalculateAveragePriceRequest,
  ): Promise<GetCalculateAveragePriceResponse> {
    return await this.findCalculateService.getCalculateAveragePrice(request);
  }
}
