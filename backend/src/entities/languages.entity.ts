import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import PropertiesLanguagesEntity from "./properties_languages.entity";
import ReviewsEntity from "./reviews.entity";

@Entity('languages')
export default class LanguagesEntity{
@PrimaryGeneratedColumn({
  name: 'id',
  type: "integer",
})
  id: number

  @Column({
    name: 'title',
    type: 'char',
    length: 64,
    nullable: false
  })
  title: string

  @Column({
    name: 'code',
    type: 'char',
    length: 64,
    nullable: false
  })
  code: string

  @OneToMany(()=> PropertiesLanguagesEntity, (record) => record.language)
  properties: PropertiesLanguagesEntity[]

  @OneToMany(()=> ReviewsEntity, (record) => record)
  reviews: ReviewsEntity[]
}