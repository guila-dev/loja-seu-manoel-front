import { Game } from "../entities/game.entity";

export class GameMapper {

  static toDomain(raw: any): Game {
    return new Game(raw.name, raw.price, raw.dimensions, raw.description, raw.coverImage);
  }

  static toDTO(game: Game): any {


    const id = 0 //getLastId

    return {
      id,
      name: game.name,
      price: game.price,
      dimensions: game.dimensions,
      description: game.description,
      coverImage: game.coverImage
    };
  }
}