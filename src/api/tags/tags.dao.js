import { instances } from 'hapi-sequelizejs';

const Tag = instances.getModel('tag');

export default class TagsDao {
    findAll(where) {
        return Tag.findAll({ where });
    }

    findById(where) {
        return Tag.findOne({ where });
    }

    create(tag) {
        return Tag.create(tag);
    }

    async update(params, payload) {
        await Tag.update(payload, { where: params });
        return await this.findById(params.id);
    }
    
    destroy(where) {
        return Tag.destroy({ where });
    }
};