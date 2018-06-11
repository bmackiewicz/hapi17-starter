import { Request, ResponseToolkit } from 'hapi';

interface IRouting {
  method: string[] | string;
  path: string;
  handler?: (request: Request, h: ResponseToolkit) => void;
  config?: {
    handler?: (request: Request, h: ResponseToolkit) => void;
    auth?: boolean | { strategies: string[] };
    validate?: any;
    payload?: {
      output?: string,
      maxBytes?: number,
      timeout?: boolean,
      allow?: string;
      parse?: boolean;
    },
    plugins?: {
      authorization?: {
        roles: string[],
      },
    }
    tags?: string[];
    description?: string;
    notes?: string;
  };
}

export { IRouting };
