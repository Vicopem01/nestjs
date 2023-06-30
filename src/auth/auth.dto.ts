export class CreateUserDto {
  readonly name: string;
  readonly email: string;
  readonly phone: number;
  readonly password: string;
  readonly confirmPassword: string;
  readonly address: string;
  readonly age: number;
  readonly isBlocked: boolean;
}

export class LoginUserDto {
  readonly email: string;
  readonly password: string;
}
