import { Injectable } from '@nestjs/common';
import { MainClient, NamedAPIResourceList } from 'pokenode-ts';

@Injectable()
export class GameService {
  private client: MainClient;
  constructor() {
    this.client = new MainClient();
  }

  getVersions(): Promise<NamedAPIResourceList> {
    return this.client.game.listVersionGroups(0, 100);
  }

  getVersionByName(name: string) {
    return this.client.game.getVersionByName(name);
  }
}
