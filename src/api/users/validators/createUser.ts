import { string } from 'joi';

export const createUserValidate: object = {
    payload: {
      username: string().min(1).required(),
      password: string().min(3).required(),
    },
  };
