import { instances } from 'hapi-sequelizejs';
import { getObjectOr404 } from '../../api/utils/database.utils';

export default class UsersDao {
    model = instances.getModel('user');

    findAll() {
        return this.model.findAll();
    }

    async findById(id) {
        const options = {
            where : { id }
        };

        return await getObjectOr404(this.model, options);
    }

    async create(data) {
        return await this.model.create(data);
    }

    async update(id, data) {
        const user = await this.findById(id);
        return await user.update(data);
    }

    async destroy(id) {
        const user = await this.findById(id);
        return await user.destroy();
    }
}