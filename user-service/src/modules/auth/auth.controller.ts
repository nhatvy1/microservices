import { Body, Controller, HttpStatus, Post, Res } from '@nestjs/common'
import { AuthService } from './auth.service'
import { CreateUserDto } from './dto/create.user.dto'
import { Response } from 'src/utils/response'
import { LoginDto } from './dto/login.dto'

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async register(@Body() createUser: CreateUserDto) {
    try {
      const result = await this.authService.createUser(createUser)
      return Response({
        message: 'Đăng ký thành công',
        statusCode: HttpStatus.OK,
        result
      })
    } catch (e) {
      throw e
    }
  }

  @Post('login')
  async login(@Body() loginDto: LoginDto) {
    try {
      const result = await this.authService.login(loginDto)
      return Response({
        message: 'Đăng nhập thành công',
        statusCode: HttpStatus.OK,
        result
      })
    } catch (e) {
      throw e
    }
  }
}
