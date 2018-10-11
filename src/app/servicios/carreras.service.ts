import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFireDatabase } from 'angularfire2/database';

import {Post} from '../clases/claseCarrera';
import { Mensaje } from '../clases/mensaje';
@Injectable({
  providedIn: 'root'
})
export class CarrerasService {
  constructor(private http: HttpClient, public db: AngularFireDatabase) { }

       getData() {
        return this.http.get<Post[]>('http://yavirac.edu.ec/ignug/server/carrera/leer');
       }

       getChatBySalaId(salaId) {
        return this.db.list("mensajes", ref => ref.orderByChild("salaid").equalTo(salaId)).valueChanges()
       }

       saveMessage(mensaje:Mensaje){
        return this.db.object("mensajes/"+ mensaje.id).set(mensaje);
       }

}
