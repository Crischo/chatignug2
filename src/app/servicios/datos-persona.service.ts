import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


import {Persona} from '../clases/clasePersona';


@Injectable({
  providedIn: 'root'
})
export class DatosPersonaService {

  constructor(private http: HttpClient) {
  console.log('servicio funciona')
   }

   getPersona(){
    return this.http.get<Persona>('http://yavirac.edu.ec/ignug/server/persona/leer_filtrado?%20columna=id&tipo_filtro=coincide&filtro=308')
    }

  
}
