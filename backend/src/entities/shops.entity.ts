import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import ShopGoodsEntity from "./shop_goods.entity";
import ShopOrdersEntity from "./shop_orders.entity";
import AvatarShopEntity from "./avatar_shop.entity";
import UserShopEntity from "./user_shop.entity";
import BlockShopEntity from "./block_shop.entity";

@Entity('shop')
export default class ShopsEntity{
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
    name: 'description',
    type: "char",
    length: 512,
    nullable: false
  })
  description: string

  @Column({
    name: 'registrationTimestamp',
    type: "char",
    length: 64,
    nullable: false
  })
  registrationTimestamp: string

  @Column({
    name: 'rating',
    type: 'decimal',
    precision: 10,
    scale: 2,
    nullable: false,
    default: 4
  })
  rating: number

  @Column({
    name: 'count',
    type: "integer",
    nullable: false,
    default: 0
  })
  count: number

  @Column({
    name: 'isActive',
    type: "boolean",
    nullable: false,
    default: false
  })
  isActive: boolean

  @Column({
    name: 'isBlock',
    type: "boolean",
    nullable: false,
    default: false
  })
  isBlock: boolean

  @OneToMany(()=> ShopGoodsEntity, (record) => record.shop)
  goods: ShopGoodsEntity[]

  @OneToMany(()=> ShopOrdersEntity, (record) => record.shop)
  orders: ShopOrdersEntity[]

  @OneToOne(()=> AvatarShopEntity)
  @JoinColumn()
  avatar: AvatarShopEntity

  @OneToMany(()=> UserShopEntity, (record) => record.shop)
  users: UserShopEntity[]

  @OneToMany(()=> BlockShopEntity, (record) => record.shop)
  blocking: BlockShopEntity[]
}