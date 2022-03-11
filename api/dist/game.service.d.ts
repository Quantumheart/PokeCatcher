import { NamedAPIResourceList } from 'pokenode-ts';
export declare class GameService {
    private client;
    constructor();
    getVersions(): Promise<NamedAPIResourceList>;
}
