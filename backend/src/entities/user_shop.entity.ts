import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import ShopsEntity from "./shops.entity";
import UserEntity from "./user.entity";

@Entity('user_shop')
export default class UserShopEntity{
@PrimaryGeneratedColumn({
  name: 'id',
  type: "integer"
})
  id: number

  @Column({
    name: 'shopId',
    type: "integer",
    nullable: false
  })
  @ManyToOne(() => ShopsEntity, (shop) => shop.users)
  shop: ShopsEntity

  @Column({
    name: 'userId',
    type: "char",
    length: 256,
    nullable: false
  })
  @ManyToOne(() => UserEntity, (user) => user.shops)
  user: UserEntity

  @Column({
    name: 'timestamp',
    type: "char",
    length: 64,
    nullable: false,
    default: new Date().getTime()
  })
  timestamp: string

  @Column({
    name: 'isAlive',
    type: "boolean",
    nullable: false,
    default: true
  })
  isAlive: boolean
}