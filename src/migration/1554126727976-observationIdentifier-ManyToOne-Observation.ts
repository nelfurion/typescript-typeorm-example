import {MigrationInterface, QueryRunner} from "typeorm";

export class observationIdentifierManyToOneObservation1554126727976 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("CREATE TABLE `observation_identifier` (`id` int NOT NULL AUTO_INCREMENT, `identifier` varchar(255) NOT NULL, `text` varchar(255) NOT NULL, `observationId` int NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `observation` ADD `observationIdentifier` int NOT NULL");
        await queryRunner.query("ALTER TABLE `observation_identifier` ADD CONSTRAINT `FK_e4ff5a2030916d65ddbd80b7bd1` FOREIGN KEY (`observationId`) REFERENCES `observation`(`id`) ON DELETE SET NULL ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `observation_identifier` DROP FOREIGN KEY `FK_e4ff5a2030916d65ddbd80b7bd1`");
        await queryRunner.query("ALTER TABLE `observation` DROP COLUMN `observationIdentifier`");
        await queryRunner.query("DROP TABLE `observation_identifier`");
    }

}
