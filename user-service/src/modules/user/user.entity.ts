import { Exclude } from 'class-transformer'
import { Column, PrimaryGeneratedColumn } from 'typeorm'

export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ type: String, nullable: false })
  email: string

  @Column({ type: String, nullable: false })
  firstName: string

  @Column({ type: String, nullable: false })
  lastName: string

  @Exclude()
  @Column({ type: String, nullable: false })
  password: string
}
