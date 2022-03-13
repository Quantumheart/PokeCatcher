import { Injectable } from '@nestjs/common';
import {
  MainClient,
  NamedAPIResource,
  NamedAPIResourceList,
  Version,
} from 'pokenode-ts';
import { from, Observable } from 'rxjs';

@Injectable()
export class VersionService {
  private client: MainClient;
  private _versions: Record<string, Version[]> = {};

  constructor() {
    this.client = new MainClient({
      cacheOptions: { maxAge: 20000, exclude: { query: false } },
    });
    this.setupVersions();
  }

  get versions(): Record<string, Version[]> {
    return this._versions;
  }

  getVersionGroups(): Observable<NamedAPIResourceList> {
    return from(this.client.game.listVersionGroups(0, 100));
  }

  getVersions(): Observable<NamedAPIResourceList> {
    return from(this.client.game.listVersions(0, 100));
  }

  getVersionByName(name: string): Promise<Version> {
    return this.client.game.getVersionByName(name);
  }

  private setupVersions(): void {
    const observer = this.getVersions();
    observer.subscribe(async (response) => {
      const result = await this.getVersionList(response);
      for (const versionGroupName of result.map((d) => d.version_group.name)) {
        this._versions[versionGroupName] = result.filter(
          (d) => d.version_group.name === versionGroupName,
        );
      }
    });
  }

  private async getVersionList(
    versionsList: NamedAPIResourceList,
  ): Promise<Version[]> {
    const result: Version[] = [];
    for (const res of versionsList.results as NamedAPIResource[]) {
      await this.getVersionByName(res.name).then((versionResponse) => {
        result.push(versionResponse);
      });
    }
    return result;
  }
}
