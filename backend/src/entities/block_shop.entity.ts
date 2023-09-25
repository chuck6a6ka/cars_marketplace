import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import ReasonEntity from "./reason.entity";
import ShopsEntity from "./shops.entity";

@Entity('block_shop')
export default class BlockShopEntity{
  @PrimaryGeneratedColumn({
    name: 'id',
    type: "integer"
  })
  id: number

  @Column({
    name: "shopId",
    type: "integer",
    nullable: false,
  })
  @OneToOne( () => ShopsEntity)
  @JoinColumn()
  shop: ShopsEntity

  @Column({
    name: "reasonId",
    type: "integer",
    nullable: false,
  })
  @OneToOne( () => ReasonEntity)
  @JoinColumn()
  reason: ReasonEntity

  @Column({
    name: 'comment',
    type: "char",
    length: 256,
    nullable: false
  })
  comment: string

  @Column({
    name: 'timestamp',
    type: "char",
    length: 64,
    nullable: false,
    default: new Date().getTime()
  })
  timestamp: string

  @Column({
    name: 'endBlockTimestamp',
    type: "char",
    length: 64,
    nullable: false
  })
  endBlockTimestamp: string

  @Column({
    name: 'isActive',
    type: "boolean",
    nullable: false,
    default: true
  })
  isActive: boolean
}