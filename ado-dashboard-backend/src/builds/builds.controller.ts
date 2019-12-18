import { Controller, Get, Param } from '@nestjs/common';
import { AzureDevopsService } from 'src/services/azure-devops/azure-devops.service';

@Controller('api/builds')
export class BuildsController {
  constructor(private azureDevopsService: AzureDevopsService) {}

  @Get(':ciid')
  getLatestBuilds(@Param('ciid') ciId: number) {
    return this.azureDevopsService.getLatestBuilds(ciId);
  }
}
