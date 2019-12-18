import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import * as azdev from 'azure-devops-node-api';
import { IReleaseApi } from 'azure-devops-node-api/ReleaseApi';
import { IBuildApi } from 'azure-devops-node-api/BuildApi';

@Injectable()
export class AzureDevopsService {
  private connection: azdev.WebApi;
  private readonly projectName: string;

  constructor(private readonly configService: ConfigService) {
    const ORGANISATION_URL = this.configService.get<string>('ORGANISATION_URL');
    const PERSONAL_ACCESS_TOKEN = this.configService.get<string>(
      'PERSONAL_ACCESS_TOKEN',
    );

    this.projectName = this.configService.get<string>('PROJECT_NAME');

    // Initialise the connection
    const authHandler = azdev.getPersonalAccessTokenHandler(
      PERSONAL_ACCESS_TOKEN,
    );
    this.connection = new azdev.WebApi(ORGANISATION_URL, authHandler);
  }

  async getLatestBuilds(projectCiDefinitionId: number) {
    const client = await this.getBuildClient();
    // TODO: Get the builds for a release definition
    return client.getBuilds(this.projectName, [34]);
  }

  async getReleaseDefinitions() {
    const client = await this.getReleaseClient();
    return client.getReleaseDefinitions(this.projectName);
  }

  private async getBuildClient(): Promise<IBuildApi> {
    return this.connection.getBuildApi();
  }

  private async getReleaseClient(): Promise<IReleaseApi> {
    return this.connection.getReleaseApi();
  }
}
