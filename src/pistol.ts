import 'reflect-metadata'
import { createConnection, getRepository } from 'typeorm'

import { PistolOBX } from './entity/PistolOBX'

try {
  createConnection().then((async connection => {
    const obxRepository = getRepository(PistolOBX)

    const obx = new PistolOBX()
    obx.text = 'SEXUAL HEALTH SCREEN'
    obx.codingSystem = 'WinPath'

    /**
     * We can use save to either save one / or many objects of the type
     * @param  obx model or array of model objects
     * @return     returns the saved model object
     */
     // We can also use .create and pass a JSON
    const savedObx = await obxRepository.save(obx)

    console.log(savedObx)

    const foundObx = await obxRepository.findOne(1)

    console.log(foundObx)

  }))
} catch (e) {
  console.log(e)
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




/**
 * TypeScript Classes

 class A {
   // public property of a class
   b: Number
   // private property of a class
   private a: string
   constructor(a: string) { this.a = a }
 }

 const a: A = new A('asd')
 a.a

 *
 */


/**
 *  // SOURCES:
 *  // Repositories: https://typeorm.io/#/working-with-entity-manager
 *  // Configs and Environment Variables: https://github.com/typeorm/typeorm/blob/master/docs/using-ormconfig.md
 *  // Entities and Entity Decorators: https://typeorm.io/#/entities
 */
