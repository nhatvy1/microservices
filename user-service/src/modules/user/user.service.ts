import { ConflictException, Injectable, NotFoundException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { UserEntity } from './user.entity'
import { Repository } from 'typeorm'
import { CreateUserDto } from '../auth/dto/create.user.dto'
import { Hash } from 'src/utils/hash'

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity) private readonly userRepository: Repository<UserEntity>
  ) {}

  async getUserById(id: number) {
    try {
      const checkUser = await this.userRepository.findOneBy({ id: id })
      if(!checkUser) {
        throw new NotFoundException('Không tìm thấy người dùng')
      }
    } catch (e) {
      throw e
    }
  }

  async createUser(createUser: CreateUserDto) {
    try {
      const checkEmail = await this.userRepository.findOneBy({ email: createUser.email })

      if (checkEmail) {
        throw new ConflictException('')
      }
      const hashPassword = Hash.generateHash(createUser.password)
      const dataNewUser = {
        ...createUser,
        password: hashPassword
      }
      const newUser = this.userRepository.create(dataNewUser)
      await this.userRepository.save(newUser)
      return newUser
    } catch (e) {
      throw e
    }
  }
}
