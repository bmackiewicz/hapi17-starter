import { string } from 'joi';
import { RouteOptionsValidate } from 'hapi';

export const createUserValidate: RouteOptionsValidate = {
    payload: {
      username: string().min(1).required(),
      password: string().min(3).required(),
    },
  };
