import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryColumn } from "typeorm";
import GoodsEntity from "./goods.entity";
import PropertiesEntity from "./properties.entity";

@Entity('goods_properties')
export default class GoodsPropertiesEntity{
  @PrimaryColumn({
    name: 'id',
    type: "char",
    length: 256,
    nullable: false
  })
  id: string

  @Column({
    name: 'goodsId',
    type: "integer",
    nullable: false
  })
  @ManyToOne(() => GoodsEntity, (goods) => goods.properties)
  @JoinColumn()
  goods: GoodsEntity

  @Column({
    name: 'propertyId',
    type: "integer",
    nullable: false
  })
  @OneToOne(() => PropertiesEntity)
  @JoinColumn()
  property: PropertiesEntity

  @Column({
    name: 'isAlive',
    type: "boolean",
    nullable: false,
    default: true,
  })
  isAlive: boolean
}