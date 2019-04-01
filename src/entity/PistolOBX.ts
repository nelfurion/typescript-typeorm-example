import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class PistolOBX {
  @PrimaryGeneratedColumn()
  id: Number

  @Column()
  text: String

  @Column()
  codingSystem: String
}


/*
{
  "sequence_no": 1,
  "value_type": "ST",
  "observation_identifier": {
    "identifier": "DLT",
    "text": "SEXUAL HEALTH SCREEN",
    "coding_system": "WinPath",
    "alt_identifier": "Genetics",
    "alt_text": "1",
    "alt_coding_system": "0"
  },
  "observation_sub-id": "",
  "observation_value": ".",
  "units": {
    "identifier": "",
    "text": "",
    "coding_system": ""
  },
  "unit_reference_range": "",
  "abnormal_flags": "",
  "probability": "",
  "nature_of_abnormal_test": "",
  "observation_result_status": "F",
  "effective_date_of_last_normal_observation": "",
  "user_defined_access_check": "",
  "observation_date_and_time": "",
  "producers_id": "",
  "responsible_observer": "",
  "observation_method": ""
}
 */
