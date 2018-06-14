import { Request, ResponseToolkit } from 'hapi';
import { createToken } from '../../../auth/helpers/jwt-create-token';

export async function testHandler(_request: Request, _h: ResponseToolkit): Promise<string> {
    return createToken('nowak', 'user');
}
