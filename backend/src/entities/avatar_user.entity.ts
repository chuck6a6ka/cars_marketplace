import { Column, Entity, OneToOne, PrimaryColumn } from "typeorm";
import FilesEntity from "./files.entity";
import UserEntity from "./user.entity";

@Entity('avatar_user')
export default class AvatarUserEntity{
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
    nullable: false,
    unique: true
  })
  @OneToOne(()=> UserEntity)
  user: UserEntity

  @Column({
    name: 'fileId',
    type: "char",
    length: 256,
    nullable: false,
    unique: true
  })
  @OneToOne(() => FilesEntity)
  file: FilesEntity
}