import { HttpStatus } from '@nestjs/common'

interface ResponseType<T> {
  message: string
  statusCode: HttpStatus
  result?: T
}

export const Response = <T>({
  message,
  statusCode,
  result
}: ResponseType<T>) => {
  return {
    message: message,
    statusCode: statusCode,
    result: result || {}
  }
}
