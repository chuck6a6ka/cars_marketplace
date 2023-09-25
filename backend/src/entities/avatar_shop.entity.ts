import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('avatar_shop')
export default class AvatarShopEntity{
  @PrimaryGeneratedColumn({
    name: 'id',
    type: "integer",
  })
  id: number

  @Column({
    name: 'shopId',
    type: "integer",
    nullable: false
  })
  shopId: number

  @Column({
    name: 'fileId',
    type: "char",
    length: 256,
    nullable: false,
  })
  fileId: string
}