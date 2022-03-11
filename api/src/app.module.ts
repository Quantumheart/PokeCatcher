import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { GameService } from './game.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [GameService],
})
export class AppModule {}
