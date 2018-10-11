import { Component, OnInit, Input } from '@angular/core';
import { Mensaje } from '../clases/mensaje';

@Component({
  selector: 'app-cuerpo',
  templateUrl: './cuerpo.component.html',
  styleUrls: ['./cuerpo.component.css']
})
export class CuerpoComponent implements OnInit {
  @Input() mensajes: Mensaje[];
  @Input() salaid: string;
  constructor() { }

  ngOnInit() {

  }

}
