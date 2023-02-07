import { Roles } from "../auth.roles";

export class User {
    readonly id: string
    readonly username: string
    readonly roles: Roles[]
    
    constructor(user) { 
        this.id = user.id
        this.username = user.username
        this.roles = user.roles
    }
}