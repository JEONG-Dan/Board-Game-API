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
    create(@Param('name') name : string): string {
    this.gamesService.addBoardgame(name);
    return 'This action adds a new cat';
  }

    @Put(':id')
    updateGames(@Param('id') id: string, @Body() updateBoardgameDto: any) {
    }

    @Delete(' :id ')
    deleteGames(@Param('id') id: string) {
    }
}