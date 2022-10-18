import {Entity, model, property} from '@loopback/repository';

@model()
export class Vuelo extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  fechainicio: string;

  @property({
    type: 'string',
    required: true,
  })
  horainicio: string;

  @property({
    type: 'string',
    required: true,
  })
  fechafin: string;

  @property({
    type: 'string',
    required: true,
  })
  horafin: string;

  @property({
    type: 'string',
    required: true,
  })
  asientosvendidos: string;

  @property({
    type: 'string',
    required: true,
  })
  nombrepiloto: string;

  @property({
    type: 'string',
    required: true,
  })
  ruta: string;


  constructor(data?: Partial<Vuelo>) {
    super(data);
  }
}

export interface VueloRelations {
  // describe navigational properties here
}

export type VueloWithRelations = Vuelo & VueloRelations;
