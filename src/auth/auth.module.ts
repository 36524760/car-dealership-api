import { Module } from "@nestjs/common";
import { PassportModule } from "@nestjs/passport/dist";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { InMemoryUserRepository } from "./inMemory-user-repository";
import { USER_REPOSITORY } from "./interfaces/user-repository.interface";
import { LocalStrategy } from "./strategies/local.strategy";


@Module({
    controllers: [AuthController],
    imports: [PassportModule],
    providers: [
        AuthService, LocalStrategy,
        {
            provide: USER_REPOSITORY,
            useClass: InMemoryUserRepository
        }
    ]
    // exports: [AuthModule]
})
export class AuthModule { }