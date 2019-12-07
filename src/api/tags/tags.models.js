import { Model } from 'sequelize';

export default (sequelize, dataTypes) => {
    class Tag extends Model { };

    Tag.init({
        name: dataTypes.STRING
    }, { sequelize, modelName: 'tag' });

    Tag.associate = models => {
        models.tag.belongsTo(models.post);
    };

    return Tag;
};