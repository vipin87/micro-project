import {MigrationInterface, QueryRunner} from "typeorm";

export class catalogInitial1615984749083 implements MigrationInterface {
    name = 'catalogInitial1615984749083'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "catalog"."product_entity" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "price" integer NOT NULL, CONSTRAINT "PK_36a36f6a7c21e82a3af39340c2c" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "catalog"."product_entity"`);
    }

}
