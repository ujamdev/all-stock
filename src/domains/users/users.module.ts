import { Module } from '@nestjs/common';
import { UsersEntity } from './domain/users.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([UsersEntity])],
})
export class UsersModule {}
