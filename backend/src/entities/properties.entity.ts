import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import GoodsPropertiesEntity from "./goods_properties.entity";
import PropertiesLanguagesEntity from "./properties_languages.entity";

@Entity('properties')
export default class PropertiesEntity{
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
    name: 'code',
    type: "char",
    length: 256,
    nullable: false
  })
  code: string

  @Column({
    name: 'isAlive',
    type: "boolean",
    nullable: false,
    default: true,
  })
  isAlive: boolean

  @OneToMany(() => GoodsPropertiesEntity, (record) => record.property)
  goodsProperties: GoodsPropertiesEntity[]

  @OneToMany(()=> PropertiesLanguagesEntity, (record) => record.property)
  translations: PropertiesLanguagesEntity[]
}