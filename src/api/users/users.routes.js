import * as Controller from './users.controllers';
import * as Schemas from './users.schemas';

export default [
    {
        method: 'POST',
        path: '/users',
        handler: Controller.create,
        config: {
            auth: false,
            validate: Schemas.create
        }
    },
    {
        method: 'POST',
        path: '/users/login',
        handler: Controller.login,
        config: {
            auth: false,
            validate: Schemas.create
        }
    },
    {
        method: 'GET',
        path: '/users',
        handler: Controller.list
    }
]