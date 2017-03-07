import { Component, OnInit } from '@angular/core';
import {PokemonService} from "../Services/pokemon.service";
import {ActivatedRoute} from "@angular/router";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-crear-pokemon',
  templateUrl: './crear-pokemon.component.html',
  styleUrls: ['./crear-pokemon.component.css']
})
export class CrearPokemonComponent implements OnInit {

  private _parametros :any;
  nuevoPokemon={};

  pokemons:any=[
    {nombre:'Abra',
      imagen:'https://github.com/Oyam16/prueba-twj-UtrerasJavier/blob/master/appPokemon/assets/imagenes/pokemon/Abra.png'
    },
    {nombre:'Aereodactyl',
      imagen:'https://github.com/Oyam16/prueba-twj-UtrerasJavier/blob/master/appPokemon/assets/imagenes/pokemon/Aerodactyl.png'
    },
    {nombre:'Arbok',
      imagen:'https://github.com/Oyam16/prueba-twj-UtrerasJavier/blob/master/appPokemon/assets/imagenes/pokemon/Arbok.png'
    },
    {nombre:'Arcanine',
      imagen:'https://github.com/Oyam16/prueba-twj-UtrerasJavier/blob/master/appPokemon/assets/imagenes/pokemon/Arcanine.png'
    },
    {nombre:'Abra',
      imagen:'https://github.com/Oyam16/prueba-twj-UtrerasJavier/blob/master/appPokemon/assets/imagenes/pokemon/Abra.png'
    },
    {nombre:'Articuno',
      imagen:'https://github.com/Oyam16/prueba-twj-UtrerasJavier/blob/master/appPokemon/assets/imagenes/pokemon/Articuno.png'
    },
    {nombre:'Beedrill',
      imagen:'https://github.com/Oyam16/prueba-twj-UtrerasJavier/blob/master/appPokemon/assets/imagenes/pokemon/Beedrill.png'
    },
    {nombre:'Charizard',
      imagen:'https://github.com/Oyam16/prueba-twj-UtrerasJavier/blob/master/appPokemon/assets/imagenes/pokemon/Charizard.png'
    },
    {nombre:'Ditto',
      imagen:'https://github.com/Oyam16/prueba-twj-UtrerasJavier/blob/master/appPokemon/assets/imagenes/pokemon/Ditto.png'
    },
    {nombre:'Dratini',
      imagen:'https://github.com/Oyam16/prueba-twj-UtrerasJavier/blob/master/appPokemon/assets/imagenes/pokemon/Dratini.png'
    },
    {nombre:'Fearow',
      imagen:'https://github.com/Oyam16/prueba-twj-UtrerasJavier/blob/master/appPokemon/assets/imagenes/pokemon/Fearow.png'
    },
  ];
  pokemonSeleccionado={nombre:'',imagen:''};
  tipos1:any=[ 'Acero', 'Agua', 'Bicho', 'Dragón', 'Eléctrico', 'Fantasma', 'Fuego', 'Hada', 'Hielo', 'Lucha', 'Normal', 'Planta', 'Psíquico', 'Roca', 'Siniestro', 'Tierra', 'Veneno', 'Volador'];
  tipos2:any=[ 'Acero', 'Agua', 'Bicho', 'Dragón', 'Eléctrico', 'Fantasma', 'Fuego', 'Hada', 'Hielo', 'Lucha', 'Normal', 'Planta', 'Psíquico', 'Roca', 'Siniestro', 'Tierra', 'Veneno', 'Volador'];
  disabledButtons = {
    NuevoPokemonFormSubmitButton: false
  };

  constructor(private _PokemonService: PokemonService,
              private _ActivatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {

    this._ActivatedRoute
      .params
      .subscribe(parametros => {
        this._parametros = parametros;
      });
  }
  crearPokemon(formulario: NgForm){

    console.log(formulario)



    console.log(this.pokemonSeleccionado.nombre)
    let nuevoPokemon={
      idEntrenador:this._parametros.idEntrenador,
      nombre:formulario.value.nombre,
      tipo1:formulario.value.tipo1,
      tipo2:formulario.value.tipo2,


    };
    console.log(nuevoPokemon);

    this.disabledButtons.NuevoPokemonFormSubmitButton=true;
    this._PokemonService.create(nuevoPokemon)
      .subscribe(
        (res)=>{
          this.nuevoPokemon={};
          this.disabledButtons.NuevoPokemonFormSubmitButton=false;
        },
        (err)=>{
          console.log(err)
        }
      )
  }

}
