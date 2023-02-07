import { Body, Controller, Get, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthDto } from "./dto/auth.dto";
import { CreateUserDto } from "./dto/create-user.dto";

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }

    @Post('login')
    async login(@Body() authDto: AuthDto) {
        return await this.authService.login(authDto);

    }

    @Post('signup')
    async createUser(@Body() createUserDto: CreateUserDto) {
        return await this.authService.createUser(createUserDto);

    }
}