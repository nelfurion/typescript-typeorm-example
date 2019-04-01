import "reflect-metadata";
import {
  createConnection,
  getRepository,
} from "typeorm";

import {
  Observation,
  ObservationIdentifier
} from './entity'

/**
 * A lambda function example with a promise instead of a callback.
 * We can also pass a callback, but this is a bit cleaner.
 * @param  event AWS Event
 * @return       Promise
 */
export const handler = async (event: any = {}): Promise<any> => {
  createConnection().then(async connection => {
    const observationRepository = getRepository(Observation)
    const observationIdentifierRepository = getRepository(ObservationIdentifier)

    const observationIdentifier = new ObservationIdentifier()
    observationIdentifier.identifier = 'DLT'
    observationIdentifier.text = 'SEXUAL HEALTH SCREEN'
    const identifier = await observationIdentifierRepository.save(observationIdentifier)

    const observations = []
    for (let i = 0; i < 3; i++) {
      const observation = await observationRepository.create({
        sequence_no: 1000 + i,
        observation_value: 'some observation value',
        observationIdentifier: identifier,
        observation_result_status: '.'
      })
      observations.push(observation)
    }

    const savedObsertavions = observationRepository.save(observations)

    console.log(observations)
    console.log(identifier)

    return JSON.stringify(event, null, 2);
  }).catch(error => console.log(error));
}
