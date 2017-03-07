import { Injectable } from '@angular/core';

@Injectable()
export class MasterURLService {

  private _Url: string = '';
  constructor() {
  // this._Url='https://examen-twj-laracristian-cristian3006.c9users.io/';
  this._Url='https://examen-twj-utrerasjavier-jutreras.c9users.io/'
  }
  getUrl(){
    return this._Url;
  }

}
