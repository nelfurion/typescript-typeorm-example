import {
  EventSubscriber,
  EntitySubscriberInterface,
  InsertEvent,
} from "typeorm";

import { PistolOBX } from '../entity/PistolOBX'

@EventSubscriber()
export class PistolOBXSubscriber implements EntitySubscriberInterface<any> {
  beforeInsert (event: InsertEvent<PistolOBX>) {
    console.log('Going to insert pistol obx')
    // console.log(event)
  }

  afterInsert (event: InsertEvent<PistolOBX>) {
    console.log('Inserted 1 pistol obx')
    // console.log(event)
  }
}
