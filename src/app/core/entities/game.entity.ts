import { Dimensions } from "./dimensions.entity";

export class Game {
    constructor(
        public name: string,
        public price: number,
        public dimensions: Dimensions,
        public description: string,
        public coverImage: string){}
}