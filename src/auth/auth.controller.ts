import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto, LoginUserDto } from './auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  createUser(@Body() user: CreateUserDto) {
    return this.authService.createUser(user);
  }

  @Post('login')
  loginUser(@Body() user: LoginUserDto) {
    return this.authService.loginUser(user);
  }
}
