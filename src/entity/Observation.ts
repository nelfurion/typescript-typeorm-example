import {Entity, PrimaryGeneratedColumn, Column, ManyToOne} from "typeorm";

import { ObservationIdentifier } from './ObservationIdentifier'

@Entity()
export class Observation {
  @PrimaryGeneratedColumn()
  id: Number

  @Column()
  sequence_no: Number

  @Column({length:255})
  observation_value: String

  @Column({
    type: "char"
  })
  observation_result_status: String

  @ManyToOne(type => ObservationIdentifier, observarionIdentifier => observarionIdentifier.observations, {
    eager: true,
    onDelete: 'SET NULL'
  })
  observationIdentifier: ObservationIdentifier
}
