import { Roles } from "../auth.roles";
import { User } from "../interfaces/user.interface";

export const users: User[] = [
    {
        username: 'useradmin1',
        password: '$2b$10$nJt.WIA4jeNIhtyC7oX33eU23jij.l/Oidl/8zU1StmP5qy.dzjIy',
        roles: [Roles.Admin],
        id: 'd'
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
    {
        username: 'useradmin202454',
        password: '$2b$10$qPA37UzoXUsDn7fSZFK2T.DJ8ATCvyDxESfORZmUm87iApfcpT4Wm',
        roles: [Roles.Admin],
        id: 'd'
      }
]
