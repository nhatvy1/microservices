import {
  ExecutionContext,
  HttpStatus,
  Injectable,
  UnauthorizedException
} from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'
import { Observable } from 'rxjs'

export interface ResponseMessageInterface {
  statusCode: number
  message: Array<string>
  data: object
}

function customMessage(
  statusCode: number,
  message: string,
  data = {}
): ResponseMessageInterface {
  return {
    statusCode: statusCode,
    message: [message],
    data: data
  }
}

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  handleRequest(err: any, user: any, info: any): any {
    if (err || !user) {
      throw err || new UnauthorizedException('Chưa xác thực người dùng')
    }
    return user
  }
}
