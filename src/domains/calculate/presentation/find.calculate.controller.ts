import { Controller, Get, Query } from '@nestjs/common';
import { FindCalculateService } from '../application/find.calculate.service';
import { GetCalculateAveragePriceRequest } from '../domain/get.calculate.average.price.request';
import { GetCalculateAveragePriceResponse } from '../domain/get.calculate.average.price.response';
import { GetCalculateQuantityRequest } from '../domain/get.calculate.quantity.request';
import { GetCalculateQuantityResponse } from '../domain/get.calculate.quantity.response';
import { GetCalculateCompoundInterestResponse } from '../domain/get.calculate.compound.interest.response';
import { GetCalculateCompoundInterestRequest } from '../domain/get.calculate.compound.interest.request';

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

  /**
   * 매수할 수 있는 수량을 계산한다.
   * @param {GetCalculateQuantityRequest} request - 수량 계산에 필요한 요청 데이터
   * @return {Promise<GetCalculateQuantityResponse>} - 수량 계산 결과 응답 데이터
   */
  @Get('quantity')
  async getCalculateQuantity(
    @Query() request: GetCalculateQuantityRequest,
  ): Promise<GetCalculateQuantityResponse> {
    return await this.findCalculateService.getCalculateQuantity(request);
  }

  /**
   * 복리를 계산한다.
   * @param {GetCalculateCompoundInterestRequest} request - 복리 계산에 필요한 요청 데이터
   * @return {Promise<GetCalculateCompoundInterestResponse[]>} - 복리 계산 결과 응답 데이터
   */
  @Get('compound-interest')
  async getCalculateCompoundInterest(
    @Query() request: GetCalculateCompoundInterestRequest,
  ): Promise<GetCalculateCompoundInterestResponse[]> {
    return await this.findCalculateService.getCalculateCompoundInterest(
      request,
    );
  }
}
