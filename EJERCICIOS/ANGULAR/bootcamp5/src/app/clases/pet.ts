import { Propietario } from './propietario';
import { TipoMascota } from './tipoMascota';
import { Visit } from './visit';

export class Pet {
    id: number;
    name: string;
    birth_date: Date;
    type: TipoMascota;
    owner: Propietario;
    visits: Visit[];
}
