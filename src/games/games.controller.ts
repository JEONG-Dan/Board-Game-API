import { GamesService } from './games.service';
import { AuthGuard } from '../auth/auth.guard';
import {
    Controller,
    Get,
    Put,
    Post,
    Delete,
    Param,
    Body,
    NotFoundException,
    UseGuards,
} from '@nestjs/common';

@UseGuards(AuthGuard)
@Controller('games')
export class GamesController {
    constructor(private readonly gamesService: GamesService) {}

    @Get()
    getAllGames() {
        return this.gamesService.findAll();
    }

    @Get(':id')
    getGamesById(@Param('id') id: string) {
        const result = this.gamesService.findOne(Number(id));

        if (result) {
            return result;
        } else {
            throw new NotFoundException('Game not found');
        }
    }

    @Post()
    create(@Body() data: any) {
        return this.gamesService.addGame(data);
    }

    @Put(':id')
    updateGames(@Param('id') id: string, @Body() updateBoardgameDto: any) {
        const result = this.gamesService.modifyGame(Number(id), updateBoardgameDto);
        return result;
    }

    @Delete(':id')
    deleteGames(@Param('id') id: string) {
        this.gamesService.deleteGame(Number(id));
        return 'game deleted';
    }
}
