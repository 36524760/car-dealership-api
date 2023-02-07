import { AuthDto } from "../dto/auth.dto";
import { CreateUserDto } from "../dto/create-user.dto";
import { User } from "../entities/user.entity";
import { User as IUser } from "./user.interface";

export const USER_REPOSITORY = 'UserRepository';

export interface UserRepository {

    createUser(user: IUser): Promise<IUser>;

    findUserByName(username: string): Promise<IUser>;
}