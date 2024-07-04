import {
  UseGuards,
  applyDecorators,
} from '@nestjs/common'
import { JwtAuthGuard } from 'src/guards/jwt.guard'

export const Authentication = () => {
  return applyDecorators(UseGuards(JwtAuthGuard))
}
