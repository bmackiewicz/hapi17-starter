import { ValidationResult } from 'hapi-auth-jwt2';

export function validateToken(decodedToken: any, _request: any): ValidationResult {
    return {
        isValid: true,
        credentials: decodedToken,
    };
}
