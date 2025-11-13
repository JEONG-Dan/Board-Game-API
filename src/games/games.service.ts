import { Injectable } from '@nestjs/common';
import bgg from './bgg_dataset.json';
import { Game } from './games.entities';

@Injectable()
export class GamesService {
  games: Game[] = [];

  constructor() {
    this.games = bgg as Game[];
    console.log('First game:', this.games[0]);
  }

  findAll(): Game[] {
    return this.games;
  }

  findOne(id: string): Game | undefined {
    return this.games.find((game) => game.id === Number(id));
  }

  addGame(data: any): Game {
    const game = new Game({
      id: this.games.length + 1,
      name: data.name,
      published_at: data.published_at,
      min_players: data.min_players,
      max_players: data.max_players,
      duration: data.duration,
      age_min: data.age_min,
    });

    this.games.push(game);
    return game;
  }
}
