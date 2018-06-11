import * as Api from './server';
import { Server } from 'hapi';

async function start(): Promise<void> {
    try {
        const server: Server = await Api.init();
        await server.start();
        console.log('Server running at:', server.info.uri);
    } catch (err) {
        console.error('Error starting server: ', err.message);
        throw err;
    }
}

start();
