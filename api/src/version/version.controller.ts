import { Controller, Get } from '@nestjs/common';
import { GameService } from '../game.service';

@Controller()
export class VersionController {
  constructor(private readonly gameService: GameService) {}

  @Get('versions')
  getVersions() {
    return this.gameService.getVersions();
  }
}
