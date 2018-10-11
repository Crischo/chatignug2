import { Component, OnInit, Input } from '@angular/core';
import { CarrerasService } from '../servicios/carreras.service';
import { Mensaje } from '../clases/mensaje';
@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.css']
})
export class PieComponent implements OnInit {
  @Input() salaid: string;
  mensaje: string = "";
  constructor(private dataService: CarrerasService) { }

  ngOnInit() {
  }
  sendMessage() {
    const objetoMensaje: Mensaje ={
      id: Date.now(),
      mensaje: this.mensaje,
      nombre: "Cristian",
      salaid: this.salaid
    }

    console.log(objetoMensaje);
    this.dataService.saveMessage(objetoMensaje)
      .then((mensaje) => {
          console.log("save ", mensaje)
      }).catch(error => {
        console.log('error', error);
      })
  }
}
