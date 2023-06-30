import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  getUsers(): string {
    return 'Hello users';
  }
}
