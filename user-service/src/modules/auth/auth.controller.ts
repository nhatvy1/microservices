import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from './dto/create.user.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async register(@Body() createUser: CreateUserDto) {
    try {
      const result = await this.authService.createUser(createUser)
    } catch(e) {
      throw e 
    }
  }

  @Post('login')
  login() {
    try {

    } catch(e) {
      throw e 
    }
  }
}
