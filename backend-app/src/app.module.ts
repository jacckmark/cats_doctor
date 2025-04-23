import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { DbModule } from './db/db.module';

@Module({
  imports: [CatsModule, DbModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
