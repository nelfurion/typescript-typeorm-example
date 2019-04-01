import {MigrationInterface, QueryRunner} from "typeorm";

export class ManyToOneReversed1554127615072 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `observation_identifier` DROP FOREIGN KEY `FK_b5c93047ce971c488fa1a03cbc1`");
        await queryRunner.query("ALTER TABLE `observation` CHANGE `observationIdentifier` `observationIdentifierId` int NOT NULL");
        await queryRunner.query("ALTER TABLE `observation_identifier` DROP COLUMN `observationsId`");
        await queryRunner.query("ALTER TABLE `observation` CHANGE `observationIdentifierId` `observationIdentifierId` int NULL");
        await queryRunner.query("ALTER TABLE `observation` ADD CONSTRAINT `FK_dd2746c329b2f9f237468043891` FOREIGN KEY (`observationIdentifierId`) REFERENCES `observation_identifier`(`id`) ON DELETE SET NULL ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `observation` DROP FOREIGN KEY `FK_dd2746c329b2f9f237468043891`");
        await queryRunner.query("ALTER TABLE `observation` CHANGE `observationIdentifierId` `observationIdentifierId` int NOT NULL");
        await queryRunner.query("ALTER TABLE `observation_identifier` ADD `observationsId` int NULL");
        await queryRunner.query("ALTER TABLE `observation` CHANGE `observationIdentifierId` `observationIdentifier` int NOT NULL");
        await queryRunner.query("ALTER TABLE `observation_identifier` ADD CONSTRAINT `FK_b5c93047ce971c488fa1a03cbc1` FOREIGN KEY (`observationsId`) REFERENCES `observation`(`id`) ON DELETE SET NULL ON UPDATE NO ACTION");
    }

}
