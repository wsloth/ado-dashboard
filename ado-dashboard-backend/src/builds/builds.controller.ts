import { Controller, Get, Param } from '@nestjs/common';
import { AzureDevopsService } from 'src/services/azure-devops/azure-devops.service';

@Controller('api/builds')
export class BuildsController {
  constructor(private azureDevopsService: AzureDevopsService) {}

  @Get('definitions')
  async getBuildDefinitions() {
    return this.azureDevopsService.getBuildDefinitions();
  }

  @Get(':ciid')
  async getLatestBuilds(@Param('ciid') ciId: number) {
    return this.azureDevopsService.getLatestBuilds(ciId);
  }
}
