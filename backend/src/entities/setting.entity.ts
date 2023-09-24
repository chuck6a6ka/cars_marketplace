import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm'
@Entity({
  name: 'marketplace_settings'
})
export default class Setting {
  @PrimaryGeneratedColumn()
  id: number

  @Column({
    type: "char",
    length: 256,
    name: 'title',
    nullable: false
  })
  title: string

  @Column({
    type: "char",
    length: 256,
    name: 'code',
    nullable: false
  })
  code: string

  @Column({
    type: "char",
    length: 256,
    name: 'data',
    nullable: false
  })
  data: string
}