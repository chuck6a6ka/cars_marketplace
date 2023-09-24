import { Injectable } from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm'
import PositionEntity from "../../entities/position.entity";
import { Repository } from "typeorm";
import DepartmentEntity from "../../entities/department.entity";
@Injectable()
export class UserService {
  constructor(@InjectRepository(PositionEntity) private positionRepository: Repository<PositionEntity>,
              @InjectRepository(DepartmentEntity) private departmentRepository: Repository<DepartmentEntity>) {
  }
  async getUser(){
    const dep = await this.departmentRepository.find({relations: ['position']})
    const pos = await this.positionRepository.find({relations: ['department']})
    return {
      dep: dep,
      pos: pos
    }
  }
}
