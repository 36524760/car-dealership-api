import { Roles } from "../auth.roles";

export class User {
    readonly id: string
    readonly name: string
    readonly roles: Roles[]
    
    constructor(user) { 
        this.id = user.id
        this.name = user.name
        this.roles = user.roles
    }
}