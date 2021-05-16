import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fruta',
  templateUrl: './fruta.component.html',
  styleUrls: ['./fruta.component.css']
})
export class FrutaComponent {

  public nombre:string = 'Angel Fajardo';

  public trabajos:Array<any> = ['Bombero',44,'Fontanero','Camarero',true];

  constructor(){
    console.log(this.trabajos);
  }

  ngOnInit(){
    this.cambiarNombre();
    console.log("Nombre: " + this.nombre);

    // Variables y alcance

    var uno = 8;
    var dos = 15;
    console.log("ANTES DEL IF: " + uno);
    if(uno === 8){
      let uno = 3;
      var dos = 88;
      console.log("DENTRO DEL IF: " + uno + " - VAR DOS: " + dos) ;
    }

    console.log("DESPUES DEL IF: " + uno + " - VAR DOS: " + dos);

  }

  cambiarNombre(){
    this.nombre = 'Victor Robles';
  }


  

}
