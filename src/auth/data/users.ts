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
    {
        id: '1b',
        username: 'useradmin202',
        password: '$2b$10$REIiMeLy4teNpIQj7KsHPuImDU66cqDGU2oqXCBxZW/HL2Tv90sBm',
        roles: [Roles.Admin]
    },
]
