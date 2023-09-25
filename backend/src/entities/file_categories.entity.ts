import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('file_categories')
export default class FileCategoriesEntity{
  @PrimaryGeneratedColumn({
    name: 'id',
    type: "integer"
  })
  id: number

  @Column({
    name: 'title',
    type: "char",
    length: 64,
    nullable: false
  })
  title: string

  @Column({
    name: 'code',
    type: "char",
    length: 64,
    nullable: false
  })
  code: string
}