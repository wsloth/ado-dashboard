import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import * as azdev from 'azure-devops-node-api';
import { IReleaseApi } from 'azure-devops-node-api/ReleaseApi';
import { IBuildApi } from 'azure-devops-node-api/BuildApi';
import { IGitApi } from 'azure-devops-node-api/GitApi';

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

  async getBuildDefinitions() {
    const client = await this.getBuildClient();
    return client.getDefinitions(this.projectName);
  }

  /**
   * Get all of the builds that happened accross all repositories in the last 7 days.
   */
  async getLatestBuilds() {
    const client = await this.getBuildClient();

    // Get all definitions
    const definitions = await client.getDefinitions(this.projectName);

    // Get all builds from the last 7 days
    return client.getBuilds(
      this.projectName,
      definitions.map(d => d.id),
      null,
      null,
      new Date(new Date().getTime() - 60 * 60 * 24 * 7 * 1000), // 7 Days
    );
  }

  async getReleaseDefinitions() {
    const client = await this.getReleaseClient();
    return client.getReleaseDefinitions(this.projectName);
  }

  async getPullRequests() {
    const client = await this.getGitClient();
    return client.getPullRequestsByProject(this.projectName, {});
  }

  private async getBuildClient(): Promise<IBuildApi> {
    return this.connection.getBuildApi();
  }

  private async getReleaseClient(): Promise<IReleaseApi> {
    return this.connection.getReleaseApi();
  }

  private async getGitClient(): Promise<IGitApi> {
    return this.connection.getGitApi();
  }
}
