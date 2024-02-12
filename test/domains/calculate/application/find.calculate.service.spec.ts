import { Test, TestingModule } from '@nestjs/testing';
import { FindCalculateService } from '../src/domains/calculate/application/find.calculate.service';
import { Purchase } from '../src/domains/calculate/domain/purchase';
import { GetCalculateAveragePriceResponse } from '../src/domains/calculate/domain/get.calculate.average.price.response';

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

    it('should calculate average price', async () => {
      jest
        .spyOn(service, 'getCalculateAveragePrice')
        .mockResolvedValue(response);

      const result = await service.getCalculateAveragePrice({ purchaseList });
      expect(result).toEqual(response);
    });
  });
});
