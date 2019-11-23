import PostsDao from './posts.dao';
import { CREATED } from 'http-status';
import { NO_CONTENT } from 'http-status';

const postsDao = new PostsDao();

export async function list (request, h) {
    return await postsDao.findAll();
};

export async function detail (request, h) {
    const { id } = request.params;
    return await postsDao.findById(id) || {};
};

export async function create (request, h) {
    const { payload } = request;
    const post = await postsDao.create(payload);
    return h.response(post).code(CREATED);
};

export async function update (request, h) {
    const { params: { id }, payload } = request;
    return await postsDao.update(id, payload);
};

export async function destroy (request, h) {
    const { id } = request.params;
    await postsDao.destroy(id);
    return h.response().code(NO_CONTENT);
};
