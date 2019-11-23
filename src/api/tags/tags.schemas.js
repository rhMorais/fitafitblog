import * as Joi from '@hapi/joi';

export const params = Joi.object({
    postId: Joi.number().required(),
    id: Joi.number().required()
});

export const payload = Joi.object({
    name: Joi.string().min(3).required()
});

export const update = {
    params,
    payload
};

export const create = {
    payload,
    params: Joi.object({
        postId: Joi.number().required()
    })
};