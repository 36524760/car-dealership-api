import { Roles } from "../auth.roles";
import { User } from "../interfaces/user.interface";

export const users: User[] = [
    {
        id: '1a',
        username: 'user1',
        password: 'hardpass',
        roles: [Roles.Admin]
    },
    {
        id: '2a',
        username: 'user2',
        password: 'hardpasso',
        roles: [Roles.User]
    },
]
