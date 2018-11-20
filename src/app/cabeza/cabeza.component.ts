import { Component, OnInit } from '@angular/core';
import { CarrerasService } from '../servicios/carreras.service';
import { Mensaje } from '../clases/mensaje';
import { Post } from '../clases/claseCarrera';

@Component({
  selector: 'app-cabeza',
  templateUrl: './cabeza.component.html',
  styleUrls: ['./cabeza.component.css']
})
export class CabezaComponent implements OnInit {
  title = 'servidor';
  posts = [];
  mensajes: Mensaje[] = [];
  salaid='';
  selectedHero: Post;
  idPersona: String;
  constructor(private dataService: CarrerasService) {
    this.dataService.getData().subscribe(data => {
      this.posts = data;
      console.log("las carreras son " , this.posts)
    });
  }

  ngOnInit() {
   
  }

  filtrar(carreraId){
    console.log("seleccionnnnnnnnnnnnnnnnnnnnnn")
    this.selectedHero = carreraId;
    console.log("seleccion", this.selectedHero.nombre)
    this.salaid = carreraId;
    console.log("llego" , carreraId)
    this.dataService.getChatBySalaId(carreraId)
      .subscribe((mensajes: Mensaje[])=> {
         this.mensajes = mensajes;
         console.log('los mensajes son; ', this.mensajes); 
      }, error => {
        console.log(error)
      })
  }
  
}
