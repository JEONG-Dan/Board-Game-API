import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GamesService } from './games/games.service';
import { GamesController } from './games/games.controller';

@Module({
  imports: [],
  controllers: [AppController, GamesController],
  providers: [AppService, GamesService],
})
export class AppModule {}