"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initial1615818174638 = void 0;
class initial1615818174638 {
    constructor() {
        this.name = 'initial1615818174638';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "product_entity" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "price" integer NOT NULL, CONSTRAINT "PK_6e8f75045ddcd1c389c765c896e" PRIMARY KEY ("id"))`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE "product_entity"`);
    }
}
exports.initial1615818174638 = initial1615818174638;
//# sourceMappingURL=1615818174638-initial.js.map