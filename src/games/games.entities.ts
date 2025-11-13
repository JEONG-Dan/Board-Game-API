export class Game {
    id: number;
    name: string;
    published_at: string;
    min_players: number | string;
    max_players: number | string;
    duration: number | string;
    age_min: number;

    constructor(data: Partial<Game> = {}) {
        this.id = data.id ?? 0;
        this.name = data.name ?? '';
        this.published_at = data.published_at ?? '';
        this.min_players = data.min_players ?? '';
        this.max_players = data.max_players ?? '';
        this.duration = data.duration ?? '';
        this.age_min = data.age_min ?? 0;
    }
}