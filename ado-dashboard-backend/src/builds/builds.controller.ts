import { Controller, Get, Param } from '@nestjs/common';
import { AzureDevopsService } from 'src/services/azure-devops/azure-devops.service';

@Controller('api/builds')
export class BuildsController {
  constructor(private azureDevopsService: AzureDevopsService) {}

  @Get()
  getLatestBuilds() {
    return this.azureDevopsService.getLatestBuilds();
  }

  @Get(':id')
  getBuild(@Param('id') buildId: number) {
    return this.azureDevopsService.getBuild(buildId);
  }
}
