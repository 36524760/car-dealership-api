import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt/dist";
import { PassportModule } from "@nestjs/passport/dist";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { jwtContants } from "./constants";
import { InMemoryUserRepository } from "./inMemory-user-repository";
import { USER_REPOSITORY } from "./interfaces/user-repository.interface";
import { JwtStrategy } from "./strategies/jwt.strategy";
import { LocalStrategy } from "./strategies/local.strategy";


@Module({
    controllers: [AuthController],
    imports: [PassportModule,
        JwtModule.register({
            secret: jwtContants.secret,
            signOptions: { expiresIn: '20s' }
        }),
    ],
    providers: [
        AuthService, LocalStrategy, JwtStrategy,
        {
            provide: USER_REPOSITORY,
            useClass: InMemoryUserRepository
        }
    ],
    exports: [AuthModule]
})
export class AuthModule { }