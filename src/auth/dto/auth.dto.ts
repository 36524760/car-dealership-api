import { IsNotEmpty, IsString } from "class-validator"

export class AuthDto {
    @IsNotEmpty()
    @IsString()
    readonly name: string
    
    @IsNotEmpty()
    @IsString()
    readonly password: string
}