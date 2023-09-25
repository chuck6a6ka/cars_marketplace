import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn } from "typeorm";
import ReasonEntity from "./reason.entity";
import UserEntity from "./user.entity";

@Entity('block_user')
export default class BlockUserEntity{
 @PrimaryColumn({
   name: 'id',
   type: 'char',
   length: 256,
   nullable: false,
 })
  id: string

  @Column({
    name: 'userId',
    type: "char",
    length: 256,
    nullable: false
  })
  @OneToOne(user => UserEntity)
  @JoinColumn()
  user: UserEntity

  @Column({
    name: "reasonId",
    type: "integer",
    nullable: false,
  })
  @OneToOne(reason => ReasonEntity)
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