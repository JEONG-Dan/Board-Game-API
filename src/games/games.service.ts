import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import bgg from './bgg_dataset.json';

@Injectable()
export class GamesService {
    games;
    constructor() {
        this.games = bgg;
        console.log(this.games[0]);

    }
    findAll() {
        return this.games;
    }
    findOne(id: String): String {
        return this.games.find(games => games.id === Number(id));
    }
    addGame(name: string) {
        if (!this.games.includes(name)) {
            this.games.push(name);
        } else {
            throw new UnprocessableEntityException('Le jeu existe déjà');
        }
    }

}