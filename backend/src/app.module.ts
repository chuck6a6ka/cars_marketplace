import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'
import { MysqlOptions } from './config/config'
import { UserModule } from './modules/user/user.module';
import Setting from "./entities/setting.entity";
import DepartmentEntity from "./entities/department.entity";
import PositionEntity from "./entities/position.entity";

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: MysqlOptions.HOST,
    port: Number(MysqlOptions.PORT),
    username: MysqlOptions.USER,
    password: MysqlOptions.PASSWORD,
    database: MysqlOptions.DB_TITLE,
    entities: [Setting, DepartmentEntity, PositionEntity],
    synchronize: false,
  }), UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
