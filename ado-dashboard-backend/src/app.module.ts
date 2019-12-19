import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { BuildsController } from './builds/builds.controller';
import { AzureDevopsService } from './services/azure-devops/azure-devops.service';
import { ReleasesController } from './releases/releases.controller';
import { PullsController } from './pulls/pulls.controller';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [BuildsController, ReleasesController, PullsController],
  providers: [AzureDevopsService],
})
export class AppModule {}
