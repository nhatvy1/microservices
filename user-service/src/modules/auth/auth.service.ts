import { Injectable, UnauthorizedException } from '@nestjs/common'
import { CreateUserDto } from './dto/create.user.dto'
import { UserService } from '../user/user.service'
import { JwtService } from '@nestjs/jwt'
import { LoginDto } from './dto/login.dto'
import { Hash } from 'src/utils/hash'
import { TokenVerify, Tokens } from './interface/token'

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService
  ) {}

  async generateToken(userId: number) {
    try {
      const payload = { userId }
      const [access_token, refresh_token] = await Promise.all([
        this.jwtService.signAsync(payload, {
          secret: process.env.JWT_SECRET,
          expiresIn: process.env.JWT_EXPIRES
        }),
        this.jwtService.signAsync(payload, {
          secret: process.env.REFRESH_JWT_SECRET,
          expiresIn: process.env.REFRESH_JWT_EXPIRES
        })
      ])
      return { access_token: access_token, refresh_token: refresh_token }
    } catch (e) {
      throw e
    }
  }

  async refreshToken(tokenVerify: TokenVerify) {
    const { access_token, refresh_token } = await this.generateToken(
      tokenVerify.userId
    )
    return { access_token, refresh_token }
  }

  async createUser(createUser: CreateUserDto) {
    try {
      const newUser = await this.userService.createUser(createUser)
      delete newUser.password
      return newUser
    } catch (e) {
      throw e
    }
  }

  async login(loginDto: LoginDto) {
    try {
      const user = await this.userService.login(loginDto)
      const isValidPassword = Hash.compare(loginDto.password, user.password)
      if (!isValidPassword) {
        throw new UnauthorizedException('Email hoặc mật khẩu không chính xác')
      }

      const { access_token, refresh_token }: Tokens = await this.generateToken(
        user.id
      )

      delete user.password
      return { user, access_token, refresh_token }
    } catch (e) {
      throw e
    }
  }
}
