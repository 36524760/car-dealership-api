import { BadRequestException, Inject, Injectable, NotFoundException } from "@nestjs/common";
import { AuthDto } from "./dto/auth.dto";
import { CreateUserDto } from "./dto/create-user.dto";
import { User } from "./entities/user.entity";
import { User as IUser } from "./interfaces/user.interface";
import * as bcrypt from "bcrypt";
import { UserRepository, USER_REPOSITORY } from "./interfaces/user-repository.interface";

@Injectable()
export class AuthService {
    constructor(
        @Inject(USER_REPOSITORY)
        private readonly userRepository: UserRepository
    ) { }

    async validateUser(authDto: AuthDto) {
        const user = await this.userRepository.findUserByName(authDto.username);


        if (!user || !await bcrypt.compare(
            authDto.password,
            user.password
        )) {
            return null;
        }

        const { password, ...result } = user;
        console.log("user successfully logged in:", user)
        return result;
    }

    async login(authDto: AuthDto): Promise<User> {
        const user = await this.userRepository.findUserByName(authDto.username);

        if (!user) {
            // throw new NotFoundException('username not found');
            throw new NotFoundException('username or password incorrect');
        }
        const isPasswordValid = await bcrypt.compare(
            authDto.password,
            user.password
        );

        if (!isPasswordValid) {
            // throw new NotFoundException('password incorrect');
            throw new NotFoundException('username or password incorrect');
        }
        const userAuth = user;
        console.log("user successfully logged in:", user)

        // console.log(userAuth);
        return new User(userAuth);
    }

    async createUser(createUserDto: CreateUserDto) {

        const user = await this.userRepository.findUserByName(createUserDto.username);
        if (user) {
            throw new BadRequestException('username already taken');
        }

        const newUser: IUser = {
            ...createUserDto,
            id: "d",
            password: await bcrypt.hash(createUserDto.password, 10)
        };

        const createdUser = await this.userRepository.createUser(newUser);
        console.log("new User:", createdUser);
        return new User(createdUser);
    }
}