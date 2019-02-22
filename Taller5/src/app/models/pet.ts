// importamos todas las clses las cuales nos creamos sus atributos
import {Owner} from './owner';
import {Pettype} from './pettype';
import {Visit} from './visit';

export class Pet {
  id: number;
  name: string;
  birth_date: Date;
  type: Pettype;
  owner: Owner;
  visits: Visit [];
}
