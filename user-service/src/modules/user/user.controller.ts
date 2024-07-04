import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';
import { Authentication } from 'src/decorators/authentication.decorator';

@Authentication()
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('')
  getUser() {
    return 1
  }
}
