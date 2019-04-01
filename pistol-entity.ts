// import {
//   Entity,
//   Column,
//   CreateDateColumn,
//   UpdateDateColumn,
//   PrimaryGeneratedColumn,
//   ManyToOne,
//   OneToMany
// } from "typeorm";
//
// import {ProviderType} from "./ProviderType"
// import { ProviderAttribute } from './ProviderAttribute'
//
// @Entity()
// export class Provider {
//   @PrimaryGeneratedColumn()
//   id: number;
//
//   @OneToMany(type => ProviderAttribute, providerAttribute => providerAttribute.provider, {
//     eager: true,
//   })
//   providerAttributes: ProviderAttribute[];
//
//   @ManyToOne(type => ProviderType, providerType => providerType.providers, {
//     eager: true,
//     onDelete: 'SET NULL'
//   })
//   providerType: ProviderType
//
//   @Column({
//     length: 45
//   })
//   name: string;
//
//
// }
