import { OnModuleInit } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { AppService } from './app.service';
export declare class AppController implements OnModuleInit {
    private readonly appService;
    private catalogClient;
    private cartClient;
    constructor(appService: AppService, catalogClient: ClientKafka, cartClient: ClientKafka);
    onModuleInit(): Promise<void>;
    getCatalog(): any;
    getCart(): any;
}
