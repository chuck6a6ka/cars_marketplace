import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('segment')
export default class SegmentEntity{
  @PrimaryGeneratedColumn({
    name: 'id',
    type: "integer"
  })
  id: number

  @Column({
    name: 'title',
    type: "char",
    length: 256,
    nullable: false
  })
  title: string

  @Column({
    name: 'code',
    type: "char",
    length: 256,
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