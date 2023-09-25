import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn } from "typeorm";
import UserEntity from "./user.entity";
import FileCategoriesEntity from "./file_categories.entity";

@Entity('files')
export default class FilesEntity{
 @PrimaryColumn({
   name: 'id',
   type: "char",
   length: 256,
   nullable: false
 })
  id: string

  @Column({
    name: 'categoryId',
    type: "integer",
    nullable: false
  })
  @OneToOne(category => FileCategoriesEntity)
  @JoinColumn()
  category: FileCategoriesEntity

  @Column({
    name: 'userId',
    type: "char",
    length: 256,
    nullable: false
  })
  @OneToOne(user => UserEntity)
  @JoinColumn()
  user: UserEntity

  @Column({
    name: 'type',
    type: 'char',
    length: 256,
    nullable: false
  })
  type: string

  @Column({
    name: 'etag',
    type: 'char',
    length: 256,
    nullable: false
  })
  etag: string

  @Column({
    name: 'fkey',
    type: 'char',
    length: 256,
    nullable: false
  })
  fkey: string

  @Column({
    name: 'bucket',
    type: 'char',
    length: 256,
    nullable: false
  })
  bucket: string

  @Column({
    name: 'location',
    type: 'char',
    length: 256,
    nullable: false
  })
  location: string

  @Column({
    name: 'size',
    type: "integer",
    nullable: false
  })
  size: number

  @Column({
    name: 'timestamp',
    type: 'char',
    length: 64,
    nullable: false
  })
  timestamp: string

  @Column({
    name: 'isAlive',
    type: "boolean",
    nullable: false,
    default: true,
  })
  isAlive: boolean
}