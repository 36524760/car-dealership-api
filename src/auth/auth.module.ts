import { Module } from "@nestjs/common";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { InMemoryUserRepository } from "./inMemory-user-repository";
import { USER_REPOSITORY } from "./interfaces/user-repository.interface";


@Module({
    controllers: [AuthController],
    providers: [
        AuthService,
        {
            provide: USER_REPOSITORY,
            useClass: InMemoryUserRepository
        }
    ]
    // exports: [AuthModule]
})
export class AuthModule { }