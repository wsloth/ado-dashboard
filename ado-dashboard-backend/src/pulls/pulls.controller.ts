import { Controller, Get } from '@nestjs/common';
import { AzureDevopsService } from 'src/services/azure-devops/azure-devops.service';

@Controller('api/pulls')
export class PullsController {
  constructor(private azureDevopsService: AzureDevopsService) {}

  @Get()
  async getLatestPullRequests() {
    return this.azureDevopsService.getPullRequests();
  }
}
