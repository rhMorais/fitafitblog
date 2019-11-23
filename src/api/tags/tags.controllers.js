import TagsDao from './tags.dao';
import { CREATED } from 'http-status';
import { NO_CONTENT } from 'http-status';

const tagsDao = new TagsDao();

export async function list (request, h) {
    const { params } = request;
    return await tagsDao.findAll(params);
};

export async function detail (request, h) { //Rever
    const { params } = request; 
    return await tagsDao.findById(params) || {};
};

export async function create (request, h) {
    const { payload, params: { postId } } = request;
    payload.postId = postId;
    const tag = await tagsDao.create(payload);
    return h.response(tag).code(CREATED);
};

export async function update (request, h) {
    const { payload, params } = request;
    return await tagsDao.update(params, payload);
};

export async function destroy (request, h) {
    const { params } = request;
    await tagsDao.destroy(params);
    return h.response().code(NO_CONTENT);
};
