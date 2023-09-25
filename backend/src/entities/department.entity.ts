import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import PositionEntity from "./position.entity";
@Entity({name: 'department'})
export default class DepartmentEntity {
  @PrimaryGeneratedColumn({
    name: 'id',
    type: 'integer'
  })
  id: number

  @Column({
    type: "char",
    length: 64,
    name: 'title',
    nullable: false
  })
  title: string

  @Column({
    type: "char",
    length: 64,
    name: 'code',
    nullable: false
  })
  code: string

  @Column({
    type: "boolean",
    name: 'isAlive',
    nullable: false,
    default: true
  })
  isAlive: boolean

  @OneToMany(() => PositionEntity, position => position.department)
  position: PositionEntity[]
}