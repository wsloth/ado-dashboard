import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import * as azdev from 'azure-devops-node-api';
import * as ba from 'azure-devops-node-api/BuildApi';

@Injectable()
export class AzureDevopsService {
  private connection: azdev.WebApi;
  private readonly projectName: string;
  private readonly projectCIDefinitionId: number;

  constructor(private readonly configService: ConfigService) {
    const ORGANISATION_URL = this.configService.get<string>('ORGANISATION_URL');
    const PERSONAL_ACCESS_TOKEN = this.configService.get<string>(
      'PERSONAL_ACCESS_TOKEN',
    );

    this.projectName = this.configService.get<string>('PROJECT_NAME');
    this.projectCIDefinitionId = this.configService.get<number>(
      'PROJECT_CI_DEFINITIONID',
    );

    // Initialise the connection
    const authHandler = azdev.getPersonalAccessTokenHandler(
      PERSONAL_ACCESS_TOKEN,
    );
    this.connection = new azdev.WebApi(ORGANISATION_URL, authHandler);
  }

  async getBuild(buildId: number) {
    const client = await this.getBuildClient();
    return client.getBuild(this.projectName, buildId);
  }

  async getLatestBuilds(amount: number = 3) {
    const client = await this.getBuildClient();
    return client.getBuilds(this.projectName, [this.projectCIDefinitionId]);
  }

  private async getBuildClient(): Promise<ba.IBuildApi> {
    return this.connection.getBuildApi();
  }
}
