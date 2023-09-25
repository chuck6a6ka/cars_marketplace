import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import DepartmentEntity from "./department.entity";
@Entity({
  name: 'position'
})
export default class PositionEntity {
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

  @Column({
    type: "integer",
    name: 'departmentId',
    nullable: false
  })
  @OneToOne(() => DepartmentEntity)
  @JoinColumn()
  department: DepartmentEntity
}
