import { Component, OnInit, Input } from '@angular/core';
import { CarrerasService } from '../servicios/carreras.service';
import { Mensaje } from '../clases/mensaje';
import { Observable } from "rxjs";
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

 //Ventanas modales
  adjuntar() {
    alert(
      "Adjunte el archivo"
    )
    }
//adjuntar
/*
getFotoPerfil() {
  this.srcFoto = 'assets/images/user.png';
  this.busy = this.fotoPerfilDataService.getFiltrado('idPersona', 'coincide', this.personaLogeada.id.toString())
      .then(respuesta => {
          if (JSON.stringify(respuesta) == '[0]') {
              return;
          }
          this.fotoFile = respuesta[0].adjunto;
          this.fotoNombre = respuesta[0].nombreArchivo;
          this.fotoType = respuesta[0].tipoArchivo;
          this.srcFoto = 'data:' + this.fotoType + ';base64,' + this.fotoFile;
      })
      .catch(error => {<input type="file" id="foto" placeholder="Fotografía" #fileInput
             (change)="CodificarArchivo($event)" accept="image/*">
          this.toastr.warning('Se produjo un error', 'Actualización');
      });
}
----------------------------------------------------

CodificarArchivo(event) {
        const reader = new FileReader();
        if (event.target.files && event.target.files.length > 0) {
            const file = event.target.files[0];
            reader.readAsDataURL(file);
            reader.onload = () => {
                this.fotoNombre = file.name;
                this.fotoType = file.type;
                this.fotoFile = reader.result.split(',')[1];
                this.srcFoto = 'data:' + this.fotoType + ';base64,' + this.fotoFile;
            };
        }
    }







  */
  sendMessage() {
    const objetoMensaje: Mensaje ={
      id: Date.now(),
      mensaje: this.mensaje,
      nombre: "Ivan",
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
