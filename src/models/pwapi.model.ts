import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Pwapi extends Entity {

  @property({
    id: true,
    description: 'The unique identifier for a product',
  })
  id: string;


  @property({
    type: 'array',
    itemType: 'string',
  })
  notes?: string[];



  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Pwapi>) {
    super(data);
  }
}

export interface PwapiRelations {
  // describe navigational properties here
}

export type PwapiWithRelations = Pwapi & PwapiRelations;
