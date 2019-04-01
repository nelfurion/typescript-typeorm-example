import {MigrationInterface, QueryRunner} from "typeorm";

export class ManyToOneMakeObservationsPropertyArray1554127262103 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `observation_identifier` DROP FOREIGN KEY `FK_e4ff5a2030916d65ddbd80b7bd1`");
        await queryRunner.query("ALTER TABLE `observation_identifier` CHANGE `observationId` `observationsId` int NULL");
        await queryRunner.query("ALTER TABLE `observation_identifier` ADD CONSTRAINT `FK_b5c93047ce971c488fa1a03cbc1` FOREIGN KEY (`observationsId`) REFERENCES `observation`(`id`) ON DELETE SET NULL ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `observation_identifier` DROP FOREIGN KEY `FK_b5c93047ce971c488fa1a03cbc1`");
        await queryRunner.query("ALTER TABLE `observation_identifier` CHANGE `observationsId` `observationId` int NULL");
        await queryRunner.query("ALTER TABLE `observation_identifier` ADD CONSTRAINT `FK_e4ff5a2030916d65ddbd80b7bd1` FOREIGN KEY (`observationId`) REFERENCES `observation`(`id`) ON DELETE SET NULL ON UPDATE NO ACTION");
    }

}
