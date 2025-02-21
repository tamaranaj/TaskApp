import { Module } from '@nestjs/common';
import { ProjectController } from './project.controller';
import { ProjectService } from './project.service';
import { ProjectORMEntity } from './project.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[TypeOrmModule.forFeature([ProjectORMEntity])],
  controllers: [ProjectController],
  providers: [ProjectService]
})
export class ProjectModule {}
