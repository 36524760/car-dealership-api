import { IsEnum, IsNotEmpty, IsString } from "class-validator"
import { Roles } from "../auth.roles"

export class CreateUserDto {

    @IsNotEmpty()
    @IsString()
    readonly name: string
    
    @IsNotEmpty()
    @IsString()
    readonly password: string

    @IsNotEmpty()
    @IsEnum(Roles)
    readonly roles: Roles[]
}
