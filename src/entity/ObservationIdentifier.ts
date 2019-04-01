import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";

import { Observation } from './Observation'

@Entity()
export class ObservationIdentifier {

  @PrimaryGeneratedColumn()
  id: Number

  @Column({length:255})
  identifier: String

  @Column({length:255})
  text: String

  @OneToMany(type => Observation, observation => observation.observationIdentifier)
  observations: Observation[]
}
