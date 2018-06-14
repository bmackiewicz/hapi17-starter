import * as Api from './server';
import { Server } from 'hapi';
import 'reflect-metadata';
import { createConnection } from 'typeorm';
import { get } from "config";

async function start(): Promise<void> {
    try {
        const server: Server = await Api.init();
        await createConnection({
            name: 'default',
            type: 'mongodb',
            host: get<string>('typeorm.mongodb.host'),
            port: get<number>('typeorm.mongodb.port'),
            username: get<string>('typeorm.mongodb.username'),
            password: get<string>('typeorm.mongodb.password'),
            database: get<string>('typeorm.mongodb.database'),
            authSource: get<string>('typeorm.mongodb.authSource'),
            ssl: get<boolean>('typeorm.mongodb.ssl'),
            sslValidate: get<boolean>('typeorm.mongodb.sslValidate'),
            entities: [ __dirname + '/entity/{*.ts,*.js}'],
            synchronize: get<boolean>('typeorm.mongodb.synchronize'),
            logging: 'all',
          }).catch(error => console.error(error));
        await server.start();
        server.log('Server running at:', server.info.uri);
    } catch (err) {
        console.error('Error starting server: ', err.message);
        throw err;
    }
}

start();
