import Lab from '@hapi/lab';
import { expect } from '@hapi/code';
import { init } from '../../../src/config/server.config';
import { OK, CREATED, BAD_REQUEST } from 'http-status';

const { beforeEach, afterEach, describe, it } = exports.lab = lab.script();

describe('GET /posts', () => {
    let server;
    const authorization = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwiZW1haWwiOiJ0a2RzYWZsbEBnbWFpbC5jb20iLCJpYXQiOjE1NzU3NDI1NzAsImV4cCI6MTU3NTgyODk3MH0.KRJ5tXrPOIpeft8qnjucT8lF4xG1S3HqWAM6GcM4vZM';

    beforeEach(async () => {
        server = await init();
    });

    afterEach(async () => {
        await server.stop();
    });

    it('[/posts] should returns 200', async () => {
        const options = {
            method: 'GET',
            url: '/posts',
            headers: { authorization }
        };
        const res = await server.inject(options);

        expect(res.statusCode).to.equal(OK);
    });
});

describe('POST /posts', () => {
    let server;
    const authorization = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwiZW1haWwiOiJ0a2RzYWZsbEBnbWFpbC5jb20iLCJpYXQiOjE1NzU3NDI1NzAsImV4cCI6MTU3NTgyODk3MH0.KRJ5tXrPOIpeft8qnjucT8lF4xG1S3HqWAM6GcM4vZM';

    beforeEach(async () => {
        server = await init();
    });

    afterEach(async () => {
        await server.stop();
    });

    it('[/posts] should returns 201', async () => {
        const options = {
            method: 'POST',
            url: '/posts',
            headers: { authorization },
            payload: JSON.stringify({
                title: 'Novo post',
                content: 'sdafdasifhuis'
            })
        };
        const res = await server.inject(options);

        expect(res.statusCode).to.equal(CREATED);
    });
});


describe('POST /posts', () => {
    let server;
    const authorization = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwiZW1haWwiOiJ0a2RzYWZsbEBnbWFpbC5jb20iLCJpYXQiOjE1NzU3NDI1NzAsImV4cCI6MTU3NTgyODk3MH0.KRJ5tXrPOIpeft8qnjucT8lF4xG1S3HqWAM6GcM4vZM';

    beforeEach(async () => {
        server = await init();
    });

    afterEach(async () => {
        await server.stop();
    });

    it('[/posts] should returns 400', async () => {
        const options = {
            method: 'POST',
            url: '/posts',
            headers: { authorization },
            payload: JSON.stringify({
                title: 'Novo post',
                content: 'sd'
            })
        };
        const res = await server.inject(options);

        expect(res.statusCode).to.equal(BAD_REQUEST);
    });
});