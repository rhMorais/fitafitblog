import * as Controller from './posts.controllers';
import * as Schemas from './posts.schemas';

export default [
    {
        method: 'GET',
        path: '/posts',
        handler: Controller.list
    },
    {
        method: 'GET',
        path: '/posts/{id}',
        handler: Controller.detail,
        config: {
            validate: {
                params: Schemas.detail
            }
        }
    },
    {
        method: 'POST',
        path: '/posts',
        handler: Controller.create,
        config: {
            validate: {
                payload: Schemas.payload
            }
        }
    },
    {
        method: 'PUT',
        path: '/posts/{id}',
        handler: Controller.update,
        config: {
            validate: Schemas.update
        }
    },
    {
        method: 'DELETE',
        path: '/posts/{id}',
        handler: Controller.destroy,
        config: {
            validate: {
                params: Schemas.detail
            }
        }
    }
];
