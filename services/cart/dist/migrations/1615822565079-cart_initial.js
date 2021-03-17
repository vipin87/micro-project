"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cartInitial1615822565079 = void 0;
class cartInitial1615822565079 {
    constructor() {
        this.name = 'cartInitial1615822565079';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "cart_entity" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "price" integer NOT NULL, CONSTRAINT "PK_7ec8a182dc29da3b1df23408149" PRIMARY KEY ("id"))`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE "cart_entity"`);
    }
}
exports.cartInitial1615822565079 = cartInitial1615822565079;
//# sourceMappingURL=1615822565079-cart_initial.js.map