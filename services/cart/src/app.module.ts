import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CartModule } from './cart/cart.module';

import * as ormconfig from './ormconfig';

@Module({
  imports: [TypeOrmModule.forRoot(ormconfig), CartModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
