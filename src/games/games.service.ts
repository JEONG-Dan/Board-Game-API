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
    findAll() {
        return this.games;
    }
    findOne(id: number): Game | undefined {
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
    modifyGame(id: number, data: any): Game {
        const game = this.findOne(id);
        if (!game) {
        throw new Error('Game not found');
        }
        if (data.name) {
        game.name = data.name;
        }
        if (data.published_at) {
        game.published_at = data.published_at;
        }
        if (data.min_players) {
        game.min_players = data.min_players;
        }
        if (data.max_players) {
        game.max_players = data.max_players;
        }
        if (data.duration) {
        game.duration = data.duration;
        }
        if (data.age_min) {
        game.age_min = data.age_min;
        }
        const index = this.games.findIndex((g) => g.id === id);
        if (index !== -1) {
        this.games[index] = game;
        }
        return game;
    }
    deleteGame(id: number): void {
        this.games = this.games.filter((g) => g.id !== id);
    }
}
