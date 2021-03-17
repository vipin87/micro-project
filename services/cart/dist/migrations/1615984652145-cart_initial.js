"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cartInitial1615984652145 = void 0;
class cartInitial1615984652145 {
    constructor() {
        this.name = 'cartInitial1615984652145';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "cart"."cart_entity" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "price" integer NOT NULL, CONSTRAINT "PK_58bb0e3119588f0db06b69a9847" PRIMARY KEY ("id"))`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE "cart"."cart_entity"`);
    }
}
exports.cartInitial1615984652145 = cartInitial1615984652145;
//# sourceMappingURL=1615984652145-cart_initial.js.map