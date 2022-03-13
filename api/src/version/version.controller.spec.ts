import { Test, TestingModule } from '@nestjs/testing';
import { VersionController } from './version.controller';
import { GameService } from '../game.service';
import { VersionService } from './version.service';

describe('VersionController', () => {
  let versionController: VersionController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [VersionController],
      providers: [GameService, VersionService],
    }).compile();

    versionController = app.get<VersionController>(VersionController);
  });

  describe('versions', () => {
    it('should return "Hello World!"', () => {
      expect(versionController.getVersions()).toStrictEqual({});
    });
  });
});
