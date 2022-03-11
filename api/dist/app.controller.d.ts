import { GameService } from './game.service';
import { NamedAPIResourceList } from 'pokenode-ts';
export declare class AppController {
    private readonly gameService;
    constructor(gameService: GameService);
    getVersions(): Promise<NamedAPIResourceList>;
}
