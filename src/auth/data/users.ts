import { Roles } from "../auth.roles";
import { User } from "../interfaces/user.interface";

export const users: User[] = [
    {
        id: '1a',
        name: 'user1',
        password: 'hardpass',
        roles: [Roles.Admin]
    },
    {
        id: '2a',
        name: 'user2',
        password: 'hardpasso',
        roles: [Roles.User]
    },
]
