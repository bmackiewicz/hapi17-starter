export interface IJwtToken {
    user: { id: string, username: string, role: string, shops: string[], sapid: string };
    aud: string | null;
    iss: string;
    iat?: number;
    exp?: number;
  }
