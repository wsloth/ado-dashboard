import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { BuildsController } from './builds/builds.controller';
import { AzureDevopsService } from './services/azure-devops/azure-devops.service';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [AppController, BuildsController],
  providers: [AppService, AzureDevopsService],
})
export class AppModule {}
