import { NestFactory } from "@nestjs/core";
import { Transport, MicroserviceOptions } from "@nestjs/microservices";
import { Console } from "node:console";
import { AppModule } from "./app.module";

async function bootstrap() {
    const app = await NestFactory.createMicroservice<MicroserviceOptions>(
        AppModule,
        {
            transport: Transport.KAFKA,
            options: {
                client: {
                    clientId: "ms-catalog",
                    brokers: [process.env.KAFKA_BROKER],
                },
                consumer: {
                    groupId: "ms-catalog-group",
                },
            },
        }
    );
    await app.listen(() => console.log("Catalog service is running"));
}
bootstrap();
