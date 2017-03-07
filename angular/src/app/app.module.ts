import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CrearEntrenadorComponent } from './crear-entrenador/crear-entrenador.component';
import { InicioComponent } from './inicio/inicio.component';
import { CrearPokemonComponent } from './crear-pokemon/crear-pokemon.component';
import { ListaEntrenadorComponent } from './lista-entrenador/lista-entrenador.component';
import { ListaPokemonComponent } from './lista-pokemon/lista-pokemon.component';
import {RutasAppModule} from "./routes";
import {EntrenadorService} from "./Services/entrenador.service";
import {PokemonService} from "./Services/pokemon.service";
import {MasterURLService} from "./Services/master-url.service";

@NgModule({
  declarations: [
    AppComponent,
    CrearEntrenadorComponent,
    InicioComponent,
    CrearPokemonComponent,
    ListaEntrenadorComponent,
    ListaPokemonComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RutasAppModule
  ],
  providers: [
    EntrenadorService,
    PokemonService,
    MasterURLService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
