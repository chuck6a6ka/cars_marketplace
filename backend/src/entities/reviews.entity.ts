import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryColumn } from "typeorm";
import OrdersEntity from "./orders.entity";
import LanguagesEntity from "./languages.entity";
import PhotosReviewsEntity from "./photos_reviews.entity";

@Entity('reviews')
export default class ReviewsEntity{
  @PrimaryColumn({
    name: 'id',
    type: "char",
    length: 256,
    unique: true,
    nullable: false
  })
  id: string

  @Column({
    name: 'orderId',
    type: "char",
    length: 256,
    nullable: false
  })
  @ManyToOne(() => OrdersEntity, (order) => order.reviews)
  order: OrdersEntity

  @OneToMany(() => PhotosReviewsEntity, (photos) => photos.review)
  photos: PhotosReviewsEntity[]

  @Column({
    name: 'languageId',
    type: "integer",
    nullable: false
  })
  @OneToOne(() => LanguagesEntity)
  @JoinColumn()
  language: LanguagesEntity

  @Column({
    name: 'title',
    type: "char",
    length: 256,
    nullable: false
  })
  title: string

  @Column({
    name: 'description',
    type: "text",
    nullable: false
  })
  description: string

  @Column({
    name: 'rating',
    type: "integer",
    nullable: false,
    default: 1
  })
  rating: number

  @Column({
    name: 'timestamp',
    type: 'char',
    length: 64,
    nullable: false,
    default: new Date().getTime()
  })
  timestamp: string

  @Column({
    name: 'isAlive',
    type: "boolean",
    nullable: false,
    default: 1
  })
  isAlive: boolean
}