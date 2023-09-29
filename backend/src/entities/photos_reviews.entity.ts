import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryColumn } from "typeorm";
import FilesEntity from "./files.entity";
import ReviewsEntity from "./reviews.entity";

@Entity('photos_reviews')
export default class PhotosReviewsEntity{
  @PrimaryColumn({
    name: 'id',
    type: "char",
    length: 256,
    nullable: false
  })
  id: number

  @Column({
    name: 'reviewId',
    type: "char",
    length: 256,
    nullable: false
  })
  @ManyToOne(()=> ReviewsEntity, (review) => review.photos)
  review: ReviewsEntity

  @Column({
    name: 'fileId',
    type: "integer",
    nullable: false,
    unique: true
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