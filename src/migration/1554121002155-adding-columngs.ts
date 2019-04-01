import {MigrationInterface, QueryRunner} from "typeorm";

export class addingColumngs1554121002155 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `pistol_obx` ADD `text` varchar(255) NOT NULL");
        await queryRunner.query("ALTER TABLE `pistol_obx` ADD `codingSystem` varchar(255) NOT NULL");
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `pistol_obx` DROP COLUMN `codingSystem`");
        await queryRunner.query("ALTER TABLE `pistol_obx` DROP COLUMN `text`");
    }

}
