import { Injectable } from "@nestjs/common";
import { create } from "domain";
import { users } from "./data/users";
import { AuthDto } from "./dto/auth.dto";
import { CreateUserDto } from "./dto/create-user.dto";
import { User } from "./entities/user.entity";
import { User as IUser } from "./interfaces/user.interface";
import { UserRepository as UserRepository } from "./interfaces/user-repository.interface";

@Injectable()
export class InMemoryUserRepository implements UserRepository {

    async createUser(user: IUser): Promise<IUser> {
        users.push(user);
        const userFound = await this.findUserByName(user.name);
        return userFound
    }

    async findUserByName(name: string): Promise<IUser> {
        const user = await users.find(
            user => user.name === name
        );
        return user;
    }

}

