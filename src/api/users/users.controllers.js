import UsersDao from './users.dao';
import { CREATED } from 'http-status';
import { NO_CONTENT } from 'http-status';
import * as Auth from './../utils/auth.utils';

const usersDao = new UsersDao();

export async function create (request, h) {
    const { payload } = request;
    const user = await usersDao.create(payload);
    return h.response(user).code(CREATED);
};

export async function login (request, h) {
    const { payload } = request;
    const user = await Auth.authenticate(payload);
    const token = Auth.getToken({
        id: user.id,
        email: user.email
    });
    return { user, token };
};

export async function list (request, h) {
    return await usersDao.findAll();
};

export async function detail (request, h) {
    const { id } = request.params;
    return await usersDao.findById(id) || {};
};

export async function update (request, h) {
    const { params: { id }, payload } = request;
    return await usersDao.update(id, payload);
};

export async function destroy (request, h) {
    const { id } = request.params;
    await usersDao.destroy(id);
    return h.response().code(NO_CONTENT);
};
