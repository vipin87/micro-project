import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { ClientsModule, Transport } from "@nestjs/microservices";
import { AppService } from "./app.service";

@Module({
    imports: [
        ClientsModule.register([
            {
                name: "CATALOG_SERVICE",
                transport: Transport.KAFKA,
                options: {
                    client: {
                        clientId: "catalog",
                        brokers: [process.env.KAFKA_BROKER],
                    },
                    consumer: {
                        groupId: "ms-catalog",
                    },
                },
            },
            {
                name: "CART_SERVICE",
                transport: Transport.KAFKA,
                options: {
                    client: {
                        clientId: "cart",
                        brokers: [process.env.KAFKA_BROKER],
                    },
                    consumer: {
                        groupId: "ms-cart",
                    },
                },
            },
        ]),
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
