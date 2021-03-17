"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const microservices_1 = require("@nestjs/microservices");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.createMicroservice(app_module_1.AppModule, {
        transport: microservices_1.Transport.KAFKA,
        options: {
            client: {
                clientId: "ms-cart",
                brokers: [process.env.KAFKA_BROKER],
            },
            consumer: {
                groupId: "ms-cart-group",
            },
        },
    });
    await app.listen(() => console.log("Cart service is running"));
}
bootstrap();
//# sourceMappingURL=main.js.map