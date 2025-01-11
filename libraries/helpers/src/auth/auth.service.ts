import { sign, verify } from 'jsonwebtoken';
import { hashSync, compareSync } from 'bcrypt';
import crypto from 'crypto';

export class AuthService {
  static hashPassword(password: string) {
    return hashSync(password, 10);
  }

  static comparePassword(password: string, hash: string) {
    return compareSync(password, hash);
  }

  static signJWT(value: object) {
    return sign(value, process.env.JWT_SECRET!);
  }

  static verifyJWT(token: string) {
    return verify(token, process.env.JWT_SECRET!);
  }

  static fixedEncryption(value: string) {
    const algorithm = 'aes-256-cbc'; // Encryption algorithm
    const secretKey = crypto.createHash('sha256').update(String(process.env.JWT_SECRET)).digest('base64').substr(0, 32); // 32-byte key
    const iv = crypto.randomBytes(16); // 16-byte initialization vector

    const cipher = crypto.createCipheriv(algorithm, secretKey, iv);
    let encrypted = cipher.update(value, 'utf8', 'hex');
    encrypted += cipher.final('hex');

    // Return the IV and encrypted data as a single payload
    return `${iv.toString('hex')}:${encrypted}`;
  }

  static fixedDecryption(payload: string) {
    const algorithm = 'aes-256-cbc';
    const secretKey = crypto.createHash('sha256').update(String(process.env.JWT_SECRET)).digest('base64').substr(0, 32);

    const [ivHex, encryptedData] = payload.split(':'); // Split the payload
    const iv = Buffer.from(ivHex, 'hex'); // Convert IV back to Buffer

    const decipher = crypto.createDecipheriv(algorithm, secretKey, iv);
    let decrypted = decipher.update(encryptedData, 'hex', 'utf8');
    decrypted += decipher.final('utf8');

    return decrypted;
  }
}
