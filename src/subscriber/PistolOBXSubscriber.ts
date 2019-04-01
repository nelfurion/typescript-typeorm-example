import {
  EventSubscriber,
  EntitySubscriberInterface,
  InsertEvent,
} from "typeorm";

import { PistolOBX } from '../entity/PistolOBX'

@EventSubscriber()
export class PistolOBXSubscriber implements EntitySubscriberInterface<PistolOBX> {
  /**
     * The return type of this methods indicates that it only listens to
     * PistolOBX events.
     */
    listenTo() {
        return PistolOBX;
    }

  beforeInsert (event: InsertEvent<PistolOBX>) {
    console.log('Going to insert pistol obx')
    console.log(event)
  }

  afterInsert (event: InsertEvent<PistolOBX>) {
    console.log('Inserted 1 pistol obx')
    // console.log(event)
  }
}
