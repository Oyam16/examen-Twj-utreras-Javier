import {Routes, RouterModule} from '@angular/router';
import { ModuleWithProviders }  from '@angular/core';

import {InicioComponent} from "./inicio/inicio.component";
import {CrearEntrenadorComponent} from "./crear-entrenador/crear-entrenador.component";
import {ListaEntrenadorComponent} from "./lista-entrenador/lista-entrenador.component";
import {CrearPokemonComponent} from "./crear-pokemon/crear-pokemon.component";
import {ListaPokemonComponent} from "./lista-pokemon/lista-pokemon.component";



export const routes: Routes = [
  {path: '', redirectTo: 'inicio', pathMatch: 'full'},
  {path:'inicio', component: InicioComponent},
  {path: 'entrenador', component: CrearEntrenadorComponent},
  {path:'listaEntrenador',component:ListaEntrenadorComponent},
  {path: 'pokemon/:idEntrenador', component: CrearPokemonComponent},
  {path: 'listaPokemon', component:ListaPokemonComponent}

];

export const RutasAppModule: ModuleWithProviders = RouterModule.forRoot(routes);
