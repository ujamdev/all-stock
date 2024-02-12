import { Test, TestingModule } from '@nestjs/testing';
import { FindCalculateService } from '../../../../src/domains/calculate/application/find.calculate.service';
import { Purchase } from '../../../../src/domains/calculate/domain/purchase';
import { GetCalculateAveragePriceResponse } from '../../../../src/domains/calculate/domain/get.calculate.average.price.response';

describe('FindCalculateService', () => {
  let service: FindCalculateService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FindCalculateService],
    }).compile();

    service = module.get<FindCalculateService>(FindCalculateService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('getCalculateAveragePrice', () => {
    it('단가와 수량 정보들을 계산하여 평균단가, 수량, 매입금액을 반환한다.', async () => {
      //given
      const purchaseList = [
        { price: 1530, quantity: 127 },
        { price: 1470, quantity: 245 },
        { price: 1320, quantity: 312 },
      ] as Purchase[];

      const response = {
        averagePrice: 1412.72,
        quantity: 684,
        purchasePrice: 966300,
      } as GetCalculateAveragePriceResponse;

      //when
      const result = await service.getCalculateAveragePrice({
        purchaseList,
      });

      //then
      expect(result).toEqual(response);
    });
  });
});
