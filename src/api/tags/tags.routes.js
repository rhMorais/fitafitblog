import * as Controller from './tags.controllers';
import * as Schemas from './tags.schemas';

export default [
    {
        method: 'GET',
        path: '/posts/{postId}/tags',
        handler: Controller.list
    },
    {
        method: 'GET',
        path: '/posts/{postId}/tags/{id}',
        handler: Controller.detail,
        config: {
            validate: {
                params: Schemas.params
            }
        }
    },
    {
        method: 'POST',
        path: '/posts/{postId}/tags',
        handler: Controller.create,
        config: {
            validate: Schemas.create
        }
    },
    {
        method: 'PUT',
        path: '/posts/{postId}/tags/{id}',
        handler: Controller.update,
        config: {
            validate: Schemas.update
        }
    },
    {
        method: 'DELETE',
        path: '/posts/{postId}/tags/{id}',
        handler: Controller.destroy,
        config: {
            validate: {
                params: Schemas.params
            }
        }
    }
];
