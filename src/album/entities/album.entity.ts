import { randomUUID } from "crypto";

export class Album {
    id: string; // uuid v4
    name: string;
    year: number;
    artistId: string | null; // refers to Artist

    constructor(_name: string, _year: number, _artistId: string | null) {
        this.id = randomUUID();
        this.name = _name;
        this.year = _year;
        this.artistId = _artistId;
    }
}
