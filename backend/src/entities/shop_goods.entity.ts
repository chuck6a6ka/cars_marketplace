import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryColumn,
} from 'typeorm';
import GoodsEntity from './goods.entity';
import ShopsEntity from './shops.entity';

@Entity('shop_goods')
export default class ShopGoodsEntity {
  @PrimaryColumn({
    name: 'id',
    type: 'char',
    length: 256,
    nullable: false,
  })
  id: string;

  @Column({
    name: 'goodsId',
    type: 'char',
    length: 256,
    nullable: false,
    unique: true
  })
  @OneToOne(() => GoodsEntity)
  @JoinColumn()
  goods: GoodsEntity;

  @Column({
    name: 'shopId',
    type: 'integer',
    nullable: false,
  })
  @ManyToOne(() => ShopsEntity, (shop) => shop)
  shop: ShopsEntity;

  @Column({
    name: 'isAlive',
    type: 'boolean',
    nullable: false,
    default: true,
  })
  isAlive: boolean;
}
