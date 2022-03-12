import { Controller, Get, Query } from '@nestjs/common';
import { GameService } from './game.service';
import { NamedAPIResourceList, Version } from 'pokenode-ts';

@Controller()
export class AppController {
  constructor(private readonly gameService: GameService) {}

  @Get('versions')
  getVersions(): Promise<NamedAPIResourceList> {
    return this.gameService.getVersions();
  }

  @Get('versions')
  getVersionByName(@Query() query: { name: string }): Promise<Version> {
    return this.gameService.getVersionByName(query.name);
  }
}
