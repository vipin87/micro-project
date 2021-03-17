import {MigrationInterface, QueryRunner} from "typeorm";

export class cartInitial1615984652145 implements MigrationInterface {
    name = 'cartInitial1615984652145'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "cart"."cart_entity" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "price" integer NOT NULL, CONSTRAINT "PK_58bb0e3119588f0db06b69a9847" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "cart"."cart_entity"`);
    }

}
