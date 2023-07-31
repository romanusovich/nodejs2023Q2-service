import { CreateUserDto } from "./user/dto/create-user.dto";
import { UpdateUserDto } from "./user/dto/update-user.dto";
import { User } from "./user/entities/user.entity";

class FakeDB {
    users: User[] = [];

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
        user.password = updateUserDto.newPassword;
        return user;
    }

    removeUser(id: string) {
        const user = this.users.filter((use) => use.id === id)[0];
        if (!user) return user;
        this.users.splice(this.users.indexOf(user), 1);
        return user;
    }
}

export const db = new FakeDB();