import { getObjectOr404 } from '../../api/utils/database.utils';
import { instances } from 'hapi-sequelizejs';

export default class PostsDao {
    model = instances.getModel('post');

    findAll() {
        return this.model.findAll({
            include: [ 'tags', 'user' ]
        });
    }

    async findById(id) {
        const options = {
            where: {
                id
            },
            include: [
                'tags', 'user'
            ]
        };

        return await getObjectOr404(this.model, options);
    }

    create(data) {
        return this.model.create(data);
    }

    async update(id, data) {
        const post = await this.findById(id);
        return await post.update(data);
    }
    
    async destroy(id) {
        const post = await this.findById(id);
        return await post.destroy();
    }
};