import { IsEmail, IsNotEmpty } from 'class-validator'

export class CreateUserDto {
  @IsNotEmpty({ message: 'Vui lòng nhập email' })
  @IsEmail({}, { message: 'Địa chỉ email không hợp lệ' })
  email: string

  @IsNotEmpty({ message: 'Vui lòng nhập mật khẩu' })
  password: string

  @IsNotEmpty({ message: 'Vui lòng nhập họ và tên lót' })
  firstName: string

  @IsNotEmpty({ message: 'Vui lòng nhập tên' })
  lastName: string
}
