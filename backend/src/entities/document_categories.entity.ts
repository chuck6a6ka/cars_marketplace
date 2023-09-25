import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('document_categories')
export default class DocumentCategoriesEntity{
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

  @Column({
    name: 'isAlive',
    type: "boolean",
    nullable: false,
    default: true,
  })
  isAlive: boolean
}