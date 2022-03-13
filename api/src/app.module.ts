import { Module } from '@nestjs/common';
import { VersionController } from './version/version.controller';
import { GameService } from './game.service';
import { VersionService } from './version/version.service';

@Module({
  imports: [],
  controllers: [VersionController],
  providers: [GameService, VersionService],
})
export class AppModule {}
