import { Controller, Get } from '@nestjs/common';
import { AzureDevopsService } from 'src/services/azure-devops/azure-devops.service';

@Controller('api/releases')
export class ReleasesController {
  constructor(private azureDevopsService: AzureDevopsService) {}

  /**
   * Gets a list of all release definitions for the configured project.
   */
  @Get('definitions')
  async getReleaseDefinitions() {
    return this.azureDevopsService.getReleaseDefinitions();
  }
}
