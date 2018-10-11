import { Component, OnInit, Input } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';
import * as firebase from 'firebase';
import { Mensaje } from '../clases/mensaje';

@Component({
  selector: 'app-mensaje',
  templateUrl: './mensaje.component.html',
  styleUrls: ['./mensaje.component.css']
})
export class MensajeComponent implements OnInit {
@Input() mensajes: Mensaje[];
nombreValue = '';
mensajeValue = '';
timeStamp: Date = new Date();
//mensajes: Observable<any[]>;

  constructor(public db: AngularFireDatabase) {
   // this.mensajes = db.list('mensajes').valueChanges();
   }

  ngOnInit() {
  }

}
