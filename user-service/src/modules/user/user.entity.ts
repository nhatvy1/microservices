import { Exclude } from 'class-transformer'
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ type: String, nullable: false })
  email: string

  @Column({ type: String, nullable: false })
  firstName: string

  @Column({ type: String, nullable: false })
  lastName: string

  @Column({ type: String, nullable: false, select: false })
  password: string
}
