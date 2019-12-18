import { Controller, Get, Param } from '@nestjs/common';
import { AzureDevopsService } from 'src/services/azure-devops/azure-devops.service';

@Controller('api/builds')
export class BuildsController {
  constructor(private azureDevopsService: AzureDevopsService) {}

  /**
   * Gets a list of the latest builds.
   */
  @Get()
  getLatestBuilds() {
    return this.azureDevopsService.getLatestBuilds();
  }

  /**
   *
   * @param buildId The ID of the build you want to retrieve details for.
   */
  @Get(':id')
  getBuild(@Param('id') buildId: number) {
    return this.azureDevopsService.getBuild(buildId);
  }
}
