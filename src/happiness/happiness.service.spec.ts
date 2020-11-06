import { Test } from '@nestjs/testing';
import { HappinessService } from './happiness.service';

describe('HappinessService', () => {
  let happinessService: HappinessService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [],
      controllers: [],
      providers: [],
    }).compile();

    happinessService = moduleRef.get<HappinessService>(HappinessService);
  });

  it('should be defined', () => {
    expect(happinessService).toBeDefined();
  });
});
