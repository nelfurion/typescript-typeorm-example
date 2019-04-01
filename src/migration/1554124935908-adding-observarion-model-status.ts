import {MigrationInterface, QueryRunner} from "typeorm";

export class addingObservarionModelStatus1554124935908 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("CREATE TABLE `observation` (`id` int NOT NULL AUTO_INCREMENT, `sequence_no` int NOT NULL, `observation_value` varchar(255) NOT NULL, `observation_result_status` char NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("DROP TABLE `observation`");
    }

}
