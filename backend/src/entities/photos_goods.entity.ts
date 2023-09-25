import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn } from "typeorm";
import GoodsEntity from "./goods.entity";
import FilesEntity from "./files.entity";

@Entity('photos_goods')
export default class PhotosGoodsEntity{
  @PrimaryColumn({
    name: 'id',
    type: "char",
    length: 256,
    nullable: false
  })
  id: number

  @Column({
    name: 'goodsId',
    type: "integer",
    nullable: false
  })
  @OneToOne(() => GoodsEntity)
  @JoinColumn()
  goods: GoodsEntity

  @Column({
    name: 'fileId',
    type: "integer",
    nullable: false
  })
  @OneToOne(() => FilesEntity)
  @JoinColumn()
  file: FilesEntity

  @Column({
    name: 'isAlive',
    type: "boolean",
    nullable: false,
    default: true,
  })
  isAlive: boolean
}