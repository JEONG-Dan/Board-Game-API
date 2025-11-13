import { Injectable } from '@nestjs/common';
import bgg from './bgg_dataset.json';

@Injectable()
export class GamesService {
    games;
    constructor() {
        this.games = bgg;
        console.log("coucou from boardgame service");
        console.log(this.games[0]);

    }
    findAll() {
        return this.games;
    }

    findOne(id: String): String {
        return this.games.find(games => games.name === id);
    }


    addBoardgame(games) {
        this.games.push(games);
        return games;
    }
}