import { Injectable } from '@nestjs/common';
import { Version } from 'pokenode-ts';
import { VersionService } from './version/version.service';

@Injectable()
export class GameService {
  constructor(private versionService: VersionService) {}

  getVersions(): Record<string, Version[]> {
    return this.versionService.versions;
  }
}
