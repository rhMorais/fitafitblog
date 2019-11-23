import { instances } from 'hapi-sequelizejs';

const Post = instances.getModel('post');

export default class PostsDao {
    findAll() {
        return Post.findAll();
    }

    findById(id) {
        return Post.findByPk(id);
    }

    create(data) {
        return Post.create(data);
    }

    async update(id, data) {
        await Post.update(data, { where: { id }});
        return await this.findById(id);
    }
    
    destroy(id) {
        Post.destroy({ where: { id }});
    }
};