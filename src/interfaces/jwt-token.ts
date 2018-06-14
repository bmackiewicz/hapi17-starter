export interface IJwtToken {
    user: { username: string, role: string, type: string };
    aud: string | null;
    iss: string;
    iat?: number;
    exp?: number;
  }
