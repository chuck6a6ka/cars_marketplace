import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn } from "typeorm";
import UserEntity from "./user.entity";
import BonusLevelEntity from "./bonus_level.entity";

@Entity('bonus_card')
export default class BonusCardEntity{
  @PrimaryColumn({
    name: 'id',
    type: 'char',
    length: 256,
    nullable: false
  })
  id: string

  @Column({
    name: 'userId',
    type: "integer",
    nullable: false,
    unique: true
  })
  @OneToOne(user => UserEntity)
  @JoinColumn()
  user: UserEntity

  @Column({
    name: 'levelId',
    type: "integer",
    nullable: false,
    unique: true
  })
  @OneToOne(user => BonusLevelEntity)
  @JoinColumn()
  level: BonusLevelEntity

  @Column({
    name: 'code',
    type: 'char',
    length: 256,
    nullable: false
  })
  code: string
}