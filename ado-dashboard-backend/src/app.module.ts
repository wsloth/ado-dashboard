import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { BuildsController } from './builds/builds.controller';
import { AzureDevopsService } from './services/azure-devops/azure-devops.service';
import { ReleasesController } from './releases/releases.controller';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [BuildsController, ReleasesController],
  providers: [AzureDevopsService],
})
export class AppModule {}
