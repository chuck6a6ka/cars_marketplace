import { Module } from '@nestjs/common';
import { UserController } from "../../controllers/user/user.controller";
import { UserService } from "../../services/user/user.service";
import { TypeOrmModule } from '@nestjs/typeorm';
import PositionEntity from "../../entities/position.entity";
import DepartmentEntity from "../../entities/department.entity";

@Module({
  imports: [TypeOrmModule.forFeature([PositionEntity, DepartmentEntity])],
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule {}
