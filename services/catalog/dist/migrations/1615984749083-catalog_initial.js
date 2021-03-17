"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.catalogInitial1615984749083 = void 0;
class catalogInitial1615984749083 {
    constructor() {
        this.name = 'catalogInitial1615984749083';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "catalog"."product_entity" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "price" integer NOT NULL, CONSTRAINT "PK_36a36f6a7c21e82a3af39340c2c" PRIMARY KEY ("id"))`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE "catalog"."product_entity"`);
    }
}
exports.catalogInitial1615984749083 = catalogInitial1615984749083;
//# sourceMappingURL=1615984749083-catalog_initial.js.map