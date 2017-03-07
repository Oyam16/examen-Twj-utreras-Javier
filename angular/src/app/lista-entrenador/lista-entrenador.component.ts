import { Component, OnInit } from '@angular/core';
import {EntrenadorService} from "../Services/entrenador.service";



@Component({
  selector: 'app-lista-entrenador',
  templateUrl: './lista-entrenador.component.html',
  styleUrls: ['./lista-entrenador.component.css']
})
export class ListaEntrenadorComponent implements OnInit {

  entrenadores:any=[];
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
    this._EntrenadorService.get()
      .subscribe(
        (res) => {
          this.entrenadores = res.json()
            .map((value) => {
              value.formularioCerrado = true;
              return value;
            });
          console.log('entrenadores',this.entrenadores)

        },
        (err) => {
          console.log(err);
        }
      )
  }
  actualizarEntrenador(entrenador:any){

    console.log(entrenador.id);
    this._EntrenadorService.update(entrenador,entrenador.id)
      .subscribe(

        (res) => {
          console.log("No hubo Errores");
          console.log(res);
          entrenador.formularioCerrado = !entrenador.formularioCerrado;
          console.log("Respuesta:", res.json());

        },

        (err) => {
          this.disabledButtons.NuevoEntrenadorFormSubmitButton = false;
          console.log("Ocurrio un error", err);

        },

        () => {

          console.log("Termino la función ")

        }

      );

  }
  borrarEntrenador(idEntrenador:number){
    console.log('entro en borrar entrenador')
    this._EntrenadorService.delete(idEntrenador)
      .subscribe(
        (res) => {
          console.log('borrado correctamente');
          let entrenadorBorrado = res.json();
          this.entrenadores = this.entrenadores.filter(value => entrenadorBorrado.id != value.id);
        },
        (err) => {
          console.log(err);
        }

      );
  }

}
