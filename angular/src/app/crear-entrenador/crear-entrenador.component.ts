import { Component, OnInit } from '@angular/core';
import {EntrenadorService} from "../Services/entrenador.service";
import {NgForm} from "@angular/forms";


@Component({
  selector: 'app-crear-entrenador',
  templateUrl: './crear-entrenador.component.html',
  styleUrls: ['./crear-entrenador.component.css']
})
export class CrearEntrenadorComponent implements OnInit {

  titulo:String = "Bienvenido a registrar Entrenador";
  nuevoEntrenador={};
  regiones:any=['Alola.',
    'Johto.',
    'Kanto.',
    'Hoenn.',
    'Teselia.',
    'Sinnoh.',
    'Kalos.',
    'Islas Sete'];
  disabledButtons = {
    NuevoEntrenadorFormSubmitButton: false
  };
  constructor(private _EntrenadorService:EntrenadorService) { }

  ngOnInit() {
  }
  crearEntrenador(formulario : NgForm){

    this.disabledButtons.NuevoEntrenadorFormSubmitButton=true;
    this._EntrenadorService.create(this.nuevoEntrenador)
      .subscribe(
        (res)=>{
          this.nuevoEntrenador={};
          this.disabledButtons.NuevoEntrenadorFormSubmitButton=false;
        },
        (err)=>{
          console.log(err)
        }
      )
  }

}
