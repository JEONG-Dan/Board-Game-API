import { Controller, Get, Put, Post, Delete, Param, Body} from '@nestjs/common';
import {GamesService} from './games.service';

@Controller('games')
export class GamesController {
    constructor(private readonly gamesService: GamesService) {}
    @Get()
    getAllGames() {
       return this.gamesService.findAll();
    }

    @Get(':id')
    getGamesById(@Param('id') id: String) {
       return this.gamesService.findOne(id);
    }

    @Post(':games')
    create(){
        return 'ajout de jeu';
    }

    @Put(':id')
    updateGames() {
        return 'mise a jour d\'un jeu';
    }

    @Delete(' :id ')
    deleteGames() {
        return 'suppression d\'un jeu';
    }
}
