import { Column, Entity, PrimaryColumn } from "typeorm";

export enum DrivingExperience {
  small = 'small',
  medium = 'medium',
  large = 'large',
  extraLarge = 'extra_large',
}

@Entity({ name: 'additional_information' })
export default class AdditionalInformationEntity {
  @PrimaryColumn({
    name: 'id',
    type: 'char',
    length: 256,
    nullable: false,
    unique: true,
  })
  id: string;

  @Column({
    name: 'userId',
    type: 'char',
    length: 256,
    nullable: false,
    unique: true,
  })
  userId: number;

  @Column({
    name: 'drivingExperience',
    type: 'enum',
    enum: DrivingExperience,
    nullable: false,
    default: DrivingExperience.small,
  })
  drivingExperience: DrivingExperience;
}