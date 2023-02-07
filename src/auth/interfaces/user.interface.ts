import { Roles } from "../auth.roles"


export interface User {
    readonly id: string;
    readonly username: string;
    readonly password: string;
    readonly roles: Roles[];

}