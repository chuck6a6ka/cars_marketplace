import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryColumn } from "typeorm";
import BrandEntity from "./brand.entity";
import TypeEntity from "./type.entity";
import SegmentEntity from "./segment.entity";
import PhotosGoodsEntity from "./photos_goods.entity";
import GoodsPropertiesEntity from "./goods_properties.entity";

@Entity('goods')
export default class GoodsEntity{
  @PrimaryColumn({
    name: 'id',
    type: "char",
    length: 256,
    nullable: false
  })
  id: string
  
  @Column({
    name: 'brandId',
    type: "integer",
    nullable: false
  })
  @OneToOne(() => BrandEntity)
  @JoinColumn()
  brand: BrandEntity

  @Column({
    name: 'typeId',
    type: "integer",
    nullable: false
  })
  @OneToOne(() => TypeEntity)
  @JoinColumn()
  type: TypeEntity

  @Column({
    name: 'segmentId',
    type: "integer",
    nullable: false
  })
  @OneToOne(() => SegmentEntity)
  @JoinColumn()
  segment: SegmentEntity

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
    length: 1024,
    nullable: true
  })
  description: string

  @Column({
    name: 'yearOfIssue',
    type: 'integer',
    nullable: false
  })
  yearOfIssue: number

  @Column({
    name: 'smallBookingPrice',
    type: 'integer',
    nullable: false
  })
  smallBookingPrice: number

  @Column({
    name: 'mediumBookingPrice',
    type: 'integer',
    nullable: false
  })
  mediumBookingPrice: number

  @Column({
    name: 'largeBookingPrice',
    type: 'integer',
    nullable: false
  })
  largeBookingPrice: number

  @Column({
    name: 'extraLargeBookingPrice',
    type: 'integer',
    nullable: false
  })
  extraLargeBookingPrice: number

  @Column({
    name: 'isDeposit',
    type: "boolean",
    nullable: false,
    default: false,
  })
  isDeposit: boolean

  @Column({
    name: 'isBonusCardDiscount',
    type: "boolean",
    nullable: false,
    default: false,
  })
  isBonusCardDiscount: boolean

  @Column({
    name: 'isAlive',
    type: "boolean",
    nullable: false,
    default: true,
  })
  isAlive: boolean

  @OneToMany(() => PhotosGoodsEntity, (photo) => photo.goods)
  photos: PhotosGoodsEntity[]

  @OneToMany(() => GoodsPropertiesEntity, (property) => property.goods)
  properties: GoodsPropertiesEntity[]
}