import { Injectable } from '@nestjs/common'
import { CreateUserDto } from './dto/create.user.dto'
import { UserService } from '../user/user.service'

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}

  async createUser(createUser: CreateUserDto) {
    try {
      const newUser = await this.userService.createUser(createUser)
      delete newUser.password
      return newUser
    } catch (e) {
      throw e
    }
  }
}
