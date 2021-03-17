"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.catalogInitial1615822603261 = void 0;
class catalogInitial1615822603261 {
    constructor() {
        this.name = 'catalogInitial1615822603261';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "product_entity" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "price" integer NOT NULL, CONSTRAINT "PK_6e8f75045ddcd1c389c765c896e" PRIMARY KEY ("id"))`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE "product_entity"`);
    }
}
exports.catalogInitial1615822603261 = catalogInitial1615822603261;
//# sourceMappingURL=1615822603261-catalog_initial.js.map