import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryColumn } from "typeorm";
import ShopsEntity from "./shops.entity";
import OrdersEntity from "./orders.entity";

@Entity('shop_orders')
export default class ShopOrdersEntity{
  @PrimaryColumn({
    name: 'id',
    type: 'char',
    length: 256,
    nullable: false,
  })
  id: string;

  @Column({
    name: 'orderId',
    type: 'char',
    length: 256,
    nullable: false,
    unique: true
  })
  @OneToOne(() => OrdersEntity)
  @JoinColumn()
  order: OrdersEntity;

  @Column({
    name: 'shopId',
    type: 'integer',
    nullable: false,
  })
  @ManyToOne(() => ShopsEntity, (shop) => shop.orders)
  shop: ShopsEntity;
}