import { Body, Controller, Get, Post, UseGuards, Request } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthDto } from "./dto/auth.dto";
import { CreateUserDto } from "./dto/create-user.dto";
import { Request as Re} from "express"
import { LocalAuthGuard } from "./guards/local-auth.guard";

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }

    @UseGuards(LocalAuthGuard)
    @Post('login')
    async login(@Body() authDto: AuthDto, @Request() req: Re) {
        // return await this.authService.validateUser(authDto);
        console.log(req.isAuthenticated())
        console.log(req.user)
        return 'logged in successfully';

    }

    @Post('signup')
    async createUser(@Body() createUserDto: CreateUserDto) {
        return await this.authService.createUser(createUserDto);

    }
}