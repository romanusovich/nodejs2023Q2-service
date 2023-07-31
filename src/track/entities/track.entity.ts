import { randomUUID } from "crypto";

export class Track {
    id: string; // uuid v4
    name: string;
    artistId: string | null; // refers to Artist
    albumId: string | null; // refers to Album
    duration: number; // integer number

    constructor(_name: string, _duration: number, _artistId: string | null, _albumId: string | null) {
        this.id = randomUUID();
        this.name = _name;
        this.duration = _duration;
        this.artistId = _artistId;
        this.albumId = _albumId;
    }
}
