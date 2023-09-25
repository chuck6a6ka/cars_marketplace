import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import ShopsEntity from "./shops.entity";
import FilesEntity from "./files.entity";

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
    nullable: false,
    unique: true
  })
  @OneToOne(() => ShopsEntity)
  @JoinColumn()
  shop: ShopsEntity

  @Column({
    name: 'fileId',
    type: "char",
    length: 256,
    nullable: false,
    unique: true
  })
  @OneToOne(() => FilesEntity)
  file: FilesEntity
}