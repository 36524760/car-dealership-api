import { Body, Controller, Get, Post, UseGuards, Request } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthDto } from "./dto/auth.dto";
import { CreateUserDto } from "./dto/create-user.dto";
import { Request as Re } from "express"
import { LocalAuthGuard } from "./guards/local-auth.guard";
import { randomInt } from "crypto";
import { JwtAuthGuard } from "./guards/jwt-auth.guard";

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }

    @UseGuards(LocalAuthGuard)
    @Post('login')
    async login(@Request() req: Re) {
        return this.authService.login(req.user);

    }

    @UseGuards(JwtAuthGuard)
    @Post('signup')
    async createUser(@Body() createUserDto: CreateUserDto) {
        return await this.authService.createUser(createUserDto);

    }
    
    @UseGuards(JwtAuthGuard)
    @Get('random')
    getRandom() {
        return randomInt(10);
    }
}