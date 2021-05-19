import { Component, OnInit } from '@angular/core';
import {Empleado} from './empleado';

@Component({
  selector: 'empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent {

  public titulo_componente:string = 'Componente empleados';
  public empleado: Empleado;
  public trabajadores:Array<Empleado>;
  public trabajador_externo:boolean;

  public color:string;
  public color_seleccionado:string;

  constructor(){
    this.empleado = new Empleado('Vicor Roblles',45,"Cocinero",true);
    this.trabajadores = [
      new Empleado('Manolo Martinez',35,"Cocinero",false),
      new Empleado('Ana Lopez',25,"Programadora",true),
      new Empleado('Victor Robles',45,"Nutricionista",false)
    ];

    this.trabajador_externo = true;
    this.color = 'red';
    this.color_seleccionado='#ccc'
  
  }

  ngOnInit(){
    
    console.log(this.empleado);
    console.log(this.trabajadores);
  }

  cambiarExterno(valor:boolean){
    this.trabajador_externo = valor;
  }

  logColorSeleccionado(){
    console.log("Color seleccionado: "+this.color_seleccionado)
  }

}
