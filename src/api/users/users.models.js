import { Model } from 'sequelize';
import Bcrypt from 'bcrypt';

export default (sequelize, dataTypes) => {
    class User extends Model {};
    
    User.init({
        email: dataTypes.STRING,
        password: dataTypes.STRING
    }, { sequelize, modelName: 'user' });

    User.associate = models => {
        models.user.hasMany(models.post);
    };

    User.addHook('beforeCreate', async (user) => {
        const hash = await Bcrypt.hash(user.password, 10);
        user.password = hash; 
    });

    return User;
};