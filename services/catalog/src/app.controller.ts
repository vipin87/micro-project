import { Controller, Get, OnModuleInit } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @MessagePattern('catalog.test')
  test(@Payload() message: any): any {
    return {
      message: 'Hello from catalog microservice!',
    };
  }
}
