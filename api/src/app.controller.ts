import { Controller, Get } from '@nestjs/common';
import { GameService } from './game.service';
import { NamedAPIResourceList } from 'pokenode-ts';

@Controller()
export class AppController {
  constructor(private readonly gameService: GameService) {}

  @Get('versions')
  getVersions(): Promise<NamedAPIResourceList> {
    return this.gameService.getVersions();
  }
}
