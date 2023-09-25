import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn } from "typeorm";
import UserEntity from "./user.entity";

@Entity('jwt_storage')
export default class JwtStorageEntity{
  @PrimaryColumn({
    name: 'id',
    type: "char",
    length: 256,
    nullable: false
  })
  id: string

  @Column({
    name: 'userId',
    type: "char",
    length: 256,
    nullable: false
  })
  @OneToOne(() => UserEntity)
  @JoinColumn()
  user: UserEntity

  @Column({
    name: 'refreshToken',
    type: 'char',
    length: 1024,
    nullable: false
  })
  refreshToken: string
}