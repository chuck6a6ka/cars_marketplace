import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import PropertiesEntity from "./properties.entity";
import LanguagesEntity from "./languages.entity";

@Entity('properties_languages')
export default class PropertiesLanguagesEntity{
 @PrimaryGeneratedColumn({
   name: 'id',
   type: "integer"
 })
  id: number

  @Column({
    name: 'propertyId',
    type: "integer",
    nullable: false
  })
  @ManyToOne(()=> PropertiesEntity, (record) => record.translations)
  property: PropertiesEntity

  @Column({
    name: 'languageId',
    type: "integer",
    nullable: false
  })
  @ManyToOne(()=> LanguagesEntity, (record) => record.properties)
  language: LanguagesEntity

  @Column({
    name: 'title',
    type: 'char',
    length: 256,
    nullable: false
  })
  title: string

  @Column({
    name: 'data',
    type: 'char',
    length: 256,
    nullable: false
  })
  data: string
}