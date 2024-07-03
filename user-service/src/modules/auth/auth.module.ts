import { Module } from '@nestjs/common'
import { AuthService } from './auth.service'
import { AuthController } from './auth.controller'
import { UserModule } from '../user/user.module'
import { JwtModule, JwtModuleOptions } from '@nestjs/jwt'

@Module({
  imports: [
    JwtModule.register({}),
    UserModule
  ],
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule {}
