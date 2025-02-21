import { Module } from '@nestjs/common';
import { TaskController } from './task.controller';
import { TaskService } from './task.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskORMEntity } from './task.entity';

@Module({
  imports:[TypeOrmModule.forFeature([TaskORMEntity])],
  controllers: [TaskController],
  providers: [TaskService]
})
export class TaskModule {}
