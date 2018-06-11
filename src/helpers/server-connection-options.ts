const serverRoutesConfig: any = {
    cors: {
      origin: ['*'],
      headers: ['Accept', 'Authorization', 'Content-Type', 'If-None-Match', 'Accept-language'],
    },
    validate: {
      options: {
        abortEarly: false,
      },
    },
  };

export { serverRoutesConfig };
