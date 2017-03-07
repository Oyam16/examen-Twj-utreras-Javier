import { Component, OnInit } from '@angular/core';
import {PokemonService} from "../Services/pokemon.service";

@Component({
  selector: 'app-lista-pokemon',
  templateUrl: './lista-pokemon.component.html',
  styleUrls: ['./lista-pokemon.component.css']
})
export class ListaPokemonComponent implements OnInit {
  disabledButtons = {
    NuevoPokemonFormSubmitButton: false
  };
  pokemons:any=[];
  pokemonsLista:any=[
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

  tipos1:any=[ 'Acero', 'Agua', 'Bicho', 'Dragón', 'Eléctrico', 'Fantasma', 'Fuego', 'Hada', 'Hielo', 'Lucha', 'Normal', 'Planta', 'Psíquico', 'Roca', 'Siniestro', 'Tierra', 'Veneno', 'Volador'];
  tipos2:any=[ 'Acero', 'Agua', 'Bicho', 'Dragón', 'Eléctrico', 'Fantasma', 'Fuego', 'Hada', 'Hielo', 'Lucha', 'Normal', 'Planta', 'Psíquico', 'Roca', 'Siniestro', 'Tierra', 'Veneno', 'Volador'];
  constructor(private _PokemonService:PokemonService) { }

  ngOnInit() {
    this._PokemonService.get()
      .subscribe(
        (res) => {
          this.pokemons = res.json()
            .map((value) => {
              value.formularioCerrado = true;
              return value;
            });
          console.log('pokemons',this.pokemons)

        },
        (err) => {
          console.log(err);
        }
      )

  }
  actualizarPokemon(pokemon:any){

    console.log(pokemon.id);
    this._PokemonService.update(pokemon,pokemon.id)
      .subscribe(

        (res) => {
          console.log("No hubo Errores");
          console.log(res);
          pokemon.formularioCerrado = !pokemon.formularioCerrado;
          console.log("Respuesta:", res.json());

        },

        (err) => {
          this.disabledButtons.NuevoPokemonFormSubmitButton = false;
          console.log("Ocurrio un error", err);

        },

        () => {

          console.log("Termino la función ")

        }

      );

  }
  borrarPokemon(idPokemon:number){
    console.log('entro en borrar entrenador')
    this._PokemonService.delete(idPokemon)
      .subscribe(
        (res) => {
          console.log('borrado correctamente');
          let pokemonBorrado = res.json();
          this.pokemons = this.pokemons.filter(value => pokemonBorrado.id != value.id);
        },
        (err) => {
          console.log(err);
        }

      );
  }
}
