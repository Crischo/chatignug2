import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { CarrerasService } from '../servicios/carreras.service';
import { DatosPersonaService } from '../servicios/datos-persona.service';
import { Mensaje } from '../clases/mensaje';
import { Persona } from '../clases/clasePersona';
import { Observable } from "rxjs";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ElementRef} from '@angular/core';


@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.css']
})
export class PieComponent implements OnInit {
  @ViewChild('fileInput') fileInput: ElementRef;
  title = 'app';
  nombre: string;
  archivo: string;
  foto: string;
  form: FormGroup;
  tipo: string;



  @Input() salaid: string;
  @Input() idPersona: string;

  mensaje: string = "";
  fotoNombre: any;
  fotoType: any;
  fotoFile: any[];
  srcFoto: string = '';
  person: Persona = null;


  constructor(private dataService: CarrerasService, private datosPersonaService: DatosPersonaService) {
   this.datosPersonaService.getPersona().subscribe(datosPersona =>{
      console.log(datosPersona.constructor.name);
      
      console.log(datosPersona[0]['nombre1']);
      

      this.person = datosPersona[0];
      console.log(this.person.nombre1);
   });
  
  /* 
constructor(private dataService: CarrerasService, private datosPersonaService: DatosPersonaService) {
  this.person = this.datosPersonaService.getPersona();
  

   }
  */
   }

  
  ngOnInit() {
  }

  CodificarArchivo(event) {
  
    var reader = new FileReader();
    if (event.target.files && event.target.files.length > 0) {
        const file = event.target.files[0];
        reader.readAsDataURL(file);
        reader.onload = () => {
            this.fotoNombre = file.name;
            this.fotoType = file.type;
            this.fotoFile = reader.result.split(',')[1];
            this.srcFoto = 'data:' + this.fotoType + ';base64,' + this.fotoFile;
            console.log(this.srcFoto)
        };
    }
}

onFileChange(event) {
  let reader = new FileReader();
  if(event.target.files && event.target.files.length > 0) {
    let file = event.target.files[0];
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.form.get('avatar').setValue({
        filename: file.name,
        filetype: file.type,
        value: reader.result.split(',')[1]
      })
    };
  }
}

processWebImage(event) {
  let reader = new FileReader();
  reader.onload = (readerEvent) => {

    let imageData = (readerEvent.target as any).result;
   
  };

 var imagen =  reader.readAsDataURL(event.target.files[0]);
 console.log(imagen)
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
                this   //  document.getElementById("inputMensaje").innerHTML = "";
      document.getElementById("foto").innerHTML = "";.fotoNombre = file.name;
                this   //  document.getElementById("inputMensaje").innerHTML = "";
      document.getElementById("foto").innerHTML = "";.fotoType = file.type;
                this   //  document.getElementById("inputMensaje").innerHTML = "";
      document.getElementById("foto").innerHTML = "";.fotoFile = reader.result.split(',')[1];
                this   //  document.getElementById("inputMensaje").innerHTML = "";
      document.getElementById("foto").innerHTML = "";.srcFoto = 'data:' + this.fotoType + ';base64,' + this.fotoFile;
            };
        }
    }







  */
  sendMessage() {
    const objetoMensaje: Mensaje ={
      id: Date.now(),
      mensaje: this.mensaje,
      nombre: this.person.nombre1,
      salaid: this.salaid,
      foto: this.srcFoto,
      tipo: this.fotoType
    }
    
  
   
    
    console.log(objetoMensaje);
    this.dataService.saveMessage(objetoMensaje)
      .then((mensaje) => {
          console.log("save ", mensaje)
      }).catch(error => {
        console.log('error', error);
      })
this.srcFoto = null;
this.mensaje = null;



 this.fileInput.nativeElement.value = null;
  }
}
