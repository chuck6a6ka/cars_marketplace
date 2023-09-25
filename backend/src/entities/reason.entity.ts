import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

export enum ReasonCategory {
  BLOCK_USER = 'for user',
  BLOCK_SHOP = 'for shop'
 }

@Entity('reason')
export default class ReasonEntity{
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
    name: 'category',
    type: "enum",
    enum: ReasonCategory,
    default: ReasonCategory.BLOCK_USER
  })
  category: ReasonCategory

  @Column({
    name: 'isAlive',
    type: "boolean",
    nullable: false,
    default: true
  })
  isAlive: boolean
}