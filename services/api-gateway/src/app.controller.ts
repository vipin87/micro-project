import { Controller, Get, Inject, OnModuleInit } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller()
export class AppController implements OnModuleInit {
  constructor(
    private readonly appService: AppService,
    @Inject('CATALOG_SERVICE') private catalogClient: ClientKafka,
    @Inject('CART_SERVICE') private cartClient: ClientKafka,
  ) {}

  async onModuleInit() {
    this.catalogClient.subscribeToResponseOf('catalog.test');
    this.cartClient.subscribeToResponseOf('cart.test');
  }

  @Get("/catalog")
  getCatalog(): any {
    return this.catalogClient.send<any>('catalog.test', {});
  }

  @Get("/cart")
  getCart(): any {
    return this.cartClient.send<any>('cart.test', {});
  }
}
