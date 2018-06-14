import { Request, ResponseToolkit } from 'hapi';

export async function testHandler(_request: Request, _h: ResponseToolkit): Promise<object> {
    return {test: 'test'};
}
