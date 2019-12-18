import { Test, TestingModule } from '@nestjs/testing';
import { AzureDevopsService } from './azure-devops.service';

describe('AzureDevopsService', () => {
  let service: AzureDevopsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AzureDevopsService],
    }).compile();

    service = module.get<AzureDevopsService>(AzureDevopsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
