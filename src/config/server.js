console.log('src/config/server.js');

import Hapi from '@hapi/hapi';
import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('fitafitblog', 'fitafitblog', 'fitafitblog', {
    dialect: 'mysql', 
    host: 'localhost',
    port: 3310
});

const data = [
    {
        title: 'Novo post' ,
        content: 'Olá abigos, nosso primeiro post',
    },
    {
        title: 'Outro post hehe' ,
        content: 'Olá abigos, estamos a todo vapo produzindo conteúdo por aqui ;)',
    }
];

const init = async () => {
    const server = Hapi.server({
        port: 3000,
        host: 'localhost'
    });

    await server.register([
        {
            plugin: require('hapi-sequelizejs'),
            options: [
                {
                    name: 'fitafitblog',
                    models: [
                        'src/api/**/**.models.js'
                    ],
                    sequelize,
                    sync: true
                }
            ]
        },
        {
            plugin: require('hapi-router'),
            options: {
                routes: 'src/api/**/**.routes.js'
            }        
        }
    ]);    

    // try {
    //     await sequelize.sync();
    //     Post.bulkCreate(data)
    // } catch (error){
    //     throw new Error(error);
    // }

    await server.start();
    console.log('Server running on %s', server.info.uri);    
};

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

init();