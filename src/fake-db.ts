import { CreateAlbumDto } from "./album/dto/create-album.dto";
import { UpdateAlbumDto } from "./album/dto/update-album.dto";
import { Album } from "./album/entities/album.entity";
import { CreateArtistDto } from "./artist/dto/create-artist.dto";
import { UpdateArtistDto } from "./artist/dto/update-artist.dto";
import { Artist } from "./artist/entities/artist.entity";
import { Favorite } from "./favorites/entities/favorite.entity";
import { CreateTrackDto } from "./track/dto/create-track.dto";
import { UpdateTrackDto } from "./track/dto/update-track.dto";
import { Track } from "./track/entities/track.entity";
import { CreateUserDto } from "./user/dto/create-user.dto";
import { UpdateUserDto } from "./user/dto/update-user.dto";
import { User } from "./user/entities/user.entity";

class FakeDB {
    users: User[] = [];
    artists: Artist[] = [];
    albums: Album[] = [];
    tracks: Track[] = [];
    favorites: Favorite = new Favorite();

    createUser(createUserDto: CreateUserDto) {
        let newUser = new User(createUserDto.login, createUserDto.password);
        this.users.push(newUser);
        return newUser;
    }

    findAllUsers() {
        const response: User[] = this.users;
        response.forEach((user) => {
            delete user.password;
        });
        return response;
    }

    findOneUser(id: string) {
        let user = this.users.filter((use) => use.id === id)[0];
        delete user.password;
        return user;
    }

    updateUser(id: string, updateUserDto: UpdateUserDto) {
        const user = this.users.filter((use) => use.id === id)[0];
        if (!user) return user;
        if (user.password === updateUserDto.oldPassword) { 
            user.password = updateUserDto.newPassword; 
            user.updatedAt = Date.now();
            user.version++;
        }
        return user;
    }

    removeUser(id: string) {
        const user = this.users.filter((use) => use.id === id)[0];
        if (!user) return user;
        this.users.splice(this.users.indexOf(user), 1);
        return user;
    }

    createArtist(createArtistDto: CreateArtistDto) {
        let newArtist = new Artist(createArtistDto.name, createArtistDto.grammy);
        this.artists.push(newArtist);
        return newArtist;
    }

    findAllArtists() {
        return this.artists;
    }

    findOneArtist(id: string) {
        let artist = this.artists.filter((artis) => artis.id === id)[0];
        return artist;
    }

    updateArtist(id: string, updateArtistDto: UpdateArtistDto) {
        const artist = this.artists.filter((artis) => artis.id === id)[0];
        if (!artist) return artist;
        artist.name = updateArtistDto.name;
        artist.grammy = updateArtistDto.grammy;
        return artist;
    }

    removeArtist(id: string) {
        const artist = this.artists.filter((artis) => artis.id === id)[0];
        if (!artist) return artist;
        db.tracks.forEach((track) => {
            if (track.artistId === artist.id) track.artistId = null;
        });
        db.albums.forEach((album) => {
            if (album.artistId === artist.id) album.artistId = null;
        });
        this.removeArtistFromF(artist.id);
        this.artists.splice(this.artists.indexOf(artist), 1);
        return artist;
    }

    createAlbum(createAlbumDto: CreateAlbumDto) {
        let newAlbum = new Album(createAlbumDto.name, createAlbumDto.year, createAlbumDto.artistId);
        this.albums.push(newAlbum);
        return newAlbum;
    }

    findAllAlbums() {
        return this.albums;
    }

    findOneAlbum(id: string) {
        let album = this.albums.filter((albu) => albu.id === id)[0];
        return album;
    }

    updateAlbum(id: string, updateAlbumDto: UpdateAlbumDto) {
        const album = this.albums.filter((albu) => albu.id === id)[0];
        if (!album) return album;
        album.name = updateAlbumDto.name;
        album.year = updateAlbumDto.year;
        album.artistId = updateAlbumDto.artistId;
        return album;
    }

    removeAlbum(id: string) {
        const album = this.albums.filter((albu) => albu.id === id)[0];
        if (!album) return album;
        db.tracks.forEach((track) => {
            if (track.albumId === album.id) track.albumId = null;
        });
        this.removeAlbumFromF(album.id);
        this.albums.splice(this.albums.indexOf(album), 1);
        return album;
    }

    createTrack(createTrackDto: CreateTrackDto) {
        let newTrack = new Track(createTrackDto.name, createTrackDto.duration, createTrackDto.artistId, createTrackDto.albumId);
        this.tracks.push(newTrack);
        return newTrack;
    }

    findAllTracks() {
        return this.tracks;
    }

    findOneTrack(id: string) {
        let track = this.tracks.filter((trac) => trac.id === id)[0];
        return track;
    }

    updateTrack(id: string, updateTrackDto: UpdateTrackDto) {
        const track = this.tracks.filter((trac) => trac.id === id)[0];
        if (!track) return track;
        track.name = updateTrackDto.name;
        track.duration = updateTrackDto.duration;
        track.artistId = updateTrackDto.artistId;
        track.albumId = updateTrackDto.albumId;
        return track;
    }

    removeTrack(id: string) {
        const track = this.tracks.filter((trac) => trac.id === id)[0];
        if (!track) return track;
        this.removeTrackFromF(track.id);
        this.tracks.splice(this.tracks.indexOf(track), 1);
        return track;
    }

    findAllFavorites() {
        const response = {
            artists: db.artists.filter((artist) => this.favorites.artists.indexOf(artist.id) !== -1),
            albums: db.albums.filter((album) => this.favorites.albums.indexOf(album.id) !== -1),
            tracks: db.tracks.filter((track) => this.favorites.tracks.indexOf(track.id) !== -1)
        };
        return response;
    }

    addTrackToF(id: string) {
        const track = this.findOneTrack(id);
        if (!track) return track;
        this.favorites.tracks.push(track.id);
        return track;
    }

    removeTrackFromF(id: string) {
        const trackId = this.favorites.tracks.indexOf(id);
        if (trackId === -1) return false;
        this.favorites.tracks.splice(trackId, 1);
        return true;
    }

    addAlbumToF(id: string) {
        const album = this.findOneAlbum(id);
        if (!album) return album;
        this.favorites.albums.push(album.id);
        return album;
    }

    removeAlbumFromF(id: string) {
        const albumId = this.favorites.albums.indexOf(id);
        if (albumId === -1) return false;
        this.favorites.albums.splice(albumId, 1);
        return true;
    }

    addArtistToF(id: string) {
        const artist = this.findOneArtist(id);
        if (!artist) return artist;
        this.favorites.artists.push(artist.id);
        return artist;
    }

    removeArtistFromF(id: string) {
        const artistId = this.favorites.artists.indexOf(id);
        if (artistId === -1) return false;
        this.favorites.artists.splice(artistId, 1);
        return true;
    }
}

export const db = new FakeDB();