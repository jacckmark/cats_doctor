import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { resolve } from 'path';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db.sqlite',
      synchronize: true,
      logging: true,
      entities: [resolve(__dirname, '../**/*.entity{.ts,.js}')],
    }),
  ],
})
export class DbModule {}
