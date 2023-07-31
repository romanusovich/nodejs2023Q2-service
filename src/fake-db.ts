import { CreateArtistDto } from "./artist/dto/create-artist.dto";
import { UpdateArtistDto } from "./artist/dto/update-artist.dto";
import { Artist } from "./artist/entities/artist.entity";
import { CreateUserDto } from "./user/dto/create-user.dto";
import { UpdateUserDto } from "./user/dto/update-user.dto";
import { User } from "./user/entities/user.entity";

class FakeDB {
    users: User[] = [];
    artists: Artist[] = [];

    createUser(createUserDto: CreateUserDto) {
        let newUser = new User(createUserDto.login, createUserDto.password);
        this.users.push(newUser);
        return newUser;
    }

    findAllUsers() {
        return this.users;
    }

    findOneUser(id: string) {
        let user = this.users.filter((use) => use.id === id)[0];
        return user;
    }

    updateUser(id: string, updateUserDto: UpdateUserDto) {
        const user = this.users.filter((use) => use.id === id)[0];
        if (!user) return user;
        if (user.password === updateUserDto.oldPassword) user.password = updateUserDto.newPassword;
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
        this.artists.splice(this.artists.indexOf(artist), 1);
        return artist;
    }
}

export const db = new FakeDB();