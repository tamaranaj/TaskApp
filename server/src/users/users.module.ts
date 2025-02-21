import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersORMEntity } from './users.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UsersORMEntity])],
  providers: [UsersService],
  exports: [UsersService]
})
export class UsersModule {}
