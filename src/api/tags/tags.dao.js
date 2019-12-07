import { instances } from 'hapi-sequelizejs';
import { getObjectOr404 } from '../../api/utils/database.utils';

export default class TagsDao {
    model = instances.getModel('tag');

    findAll(where) {
        return this.model.findAll({ where });
    }

    async findById(where) {        
        return await getObjectOr404(this.model, { where });
    }

    create(tag) {
        return this.model.create(tag);
    }

    async update(where, data) {
        const tag = await this.findById(where);
        return await tag.update(data);
    }
    
    async destroy(where) {
        const tag = await this.findById(where);
        return await tag.destroy();
    }
};