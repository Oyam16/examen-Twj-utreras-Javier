webpackJsonp([1,4],{

/***/ 191:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__master_url_service__ = __webpack_require__(192);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EntrenadorService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EntrenadorService = (function () {
    function EntrenadorService(_http, _masterURL) {
        this._http = _http;
        this._masterURL = _masterURL;
        this.modelo = 'Entrenador';
        this.url = this._masterURL.getUrl();
    }
    EntrenadorService.prototype.get = function () {
        return this._http.get(this.url + this.modelo);
    };
    EntrenadorService.prototype.getOne = function (id) {
        return this._http.get(this.url + this.modelo + id);
    };
    EntrenadorService.prototype.create = function (parametros) {
        return this._http.post(this.url + this.modelo, parametros);
    };
    EntrenadorService.prototype.update = function (parametros, id) {
        return this._http.put(this.url + this.modelo + '/' + id, parametros);
    };
    EntrenadorService.prototype.delete = function (id) {
        return this._http.delete(this.url + this.modelo + '/' + id);
    };
    EntrenadorService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__master_url_service__["a" /* MasterURLService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__master_url_service__["a" /* MasterURLService */]) === 'function' && _b) || Object])
    ], EntrenadorService);
    return EntrenadorService;
    var _a, _b;
}());
//# sourceMappingURL=entrenador.service.js.map

/***/ }),

/***/ 192:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MasterURLService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MasterURLService = (function () {
    function MasterURLService() {
        this._Url = '';
        // this._Url='https://examen-twj-laracristian-cristian3006.c9users.io/';
        this._Url = 'https://examen-twj-utrerasjavier-jutreras.c9users.io/';
    }
    MasterURLService.prototype.getUrl = function () {
        return this._Url;
    };
    MasterURLService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [])
    ], MasterURLService);
    return MasterURLService;
}());
//# sourceMappingURL=master-url.service.js.map

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__master_url_service__ = __webpack_require__(192);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PokemonService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PokemonService = (function () {
    function PokemonService(_http, _masterURL) {
        this._http = _http;
        this._masterURL = _masterURL;
        this.modelo = 'Pokemon';
        this.url = this._masterURL.getUrl();
    }
    PokemonService.prototype.get = function () {
        return this._http.get(this.url + this.modelo);
    };
    PokemonService.prototype.getOne = function (id) {
        return this._http.get(this.url + this.modelo + id);
    };
    PokemonService.prototype.create = function (parametros) {
        return this._http.post(this.url + this.modelo, parametros);
    };
    PokemonService.prototype.update = function (parametros, id) {
        return this._http.put(this.url + this.modelo + '/' + id, parametros);
    };
    PokemonService.prototype.delete = function (id) {
        return this._http.delete(this.url + this.modelo + '/' + id);
    };
    PokemonService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__master_url_service__["a" /* MasterURLService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__master_url_service__["a" /* MasterURLService */]) === 'function' && _b) || Object])
    ], PokemonService);
    return PokemonService;
    var _a, _b;
}());
//# sourceMappingURL=pokemon.service.js.map

/***/ }),

/***/ 306:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Services_entrenador_service__ = __webpack_require__(191);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CrearEntrenadorComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CrearEntrenadorComponent = (function () {
    function CrearEntrenadorComponent(_EntrenadorService) {
        this._EntrenadorService = _EntrenadorService;
        this.titulo = "Bienvenido a registrar Entrenador";
        this.nuevoEntrenador = {};
        this.regiones = ['Alola.',
            'Johto.',
            'Kanto.',
            'Hoenn.',
            'Teselia.',
            'Sinnoh.',
            'Kalos.',
            'Islas Sete'];
        this.disabledButtons = {
            NuevoEntrenadorFormSubmitButton: false
        };
    }
    CrearEntrenadorComponent.prototype.ngOnInit = function () {
    };
    CrearEntrenadorComponent.prototype.crearEntrenador = function (formulario) {
        var _this = this;
        this.disabledButtons.NuevoEntrenadorFormSubmitButton = true;
        this._EntrenadorService.create(this.nuevoEntrenador)
            .subscribe(function (res) {
            _this.nuevoEntrenador = {};
            _this.disabledButtons.NuevoEntrenadorFormSubmitButton = false;
        }, function (err) {
            console.log(err);
        });
    };
    CrearEntrenadorComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'app-crear-entrenador',
            template: __webpack_require__(522),
            styles: [__webpack_require__(515)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__Services_entrenador_service__["a" /* EntrenadorService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__Services_entrenador_service__["a" /* EntrenadorService */]) === 'function' && _a) || Object])
    ], CrearEntrenadorComponent);
    return CrearEntrenadorComponent;
    var _a;
}());
//# sourceMappingURL=crear-entrenador.component.js.map

/***/ }),

/***/ 307:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Services_pokemon_service__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(300);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CrearPokemonComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CrearPokemonComponent = (function () {
    function CrearPokemonComponent(_PokemonService, _ActivatedRoute) {
        this._PokemonService = _PokemonService;
        this._ActivatedRoute = _ActivatedRoute;
        this.nuevoPokemon = {};
        this.pokemons = [
            { nombre: 'Abra',
                imagen: 'https://github.com/Oyam16/prueba-twj-UtrerasJavier/blob/master/appPokemon/assets/imagenes/pokemon/Abra.png'
            },
            { nombre: 'Aereodactyl',
                imagen: 'https://github.com/Oyam16/prueba-twj-UtrerasJavier/blob/master/appPokemon/assets/imagenes/pokemon/Aerodactyl.png'
            },
            { nombre: 'Arbok',
                imagen: 'https://github.com/Oyam16/prueba-twj-UtrerasJavier/blob/master/appPokemon/assets/imagenes/pokemon/Arbok.png'
            },
            { nombre: 'Arcanine',
                imagen: 'https://github.com/Oyam16/prueba-twj-UtrerasJavier/blob/master/appPokemon/assets/imagenes/pokemon/Arcanine.png'
            },
            { nombre: 'Abra',
                imagen: 'https://github.com/Oyam16/prueba-twj-UtrerasJavier/blob/master/appPokemon/assets/imagenes/pokemon/Abra.png'
            },
            { nombre: 'Articuno',
                imagen: 'https://github.com/Oyam16/prueba-twj-UtrerasJavier/blob/master/appPokemon/assets/imagenes/pokemon/Articuno.png'
            },
            { nombre: 'Beedrill',
                imagen: 'https://github.com/Oyam16/prueba-twj-UtrerasJavier/blob/master/appPokemon/assets/imagenes/pokemon/Beedrill.png'
            },
            { nombre: 'Charizard',
                imagen: 'https://github.com/Oyam16/prueba-twj-UtrerasJavier/blob/master/appPokemon/assets/imagenes/pokemon/Charizard.png'
            },
            { nombre: 'Ditto',
                imagen: 'https://github.com/Oyam16/prueba-twj-UtrerasJavier/blob/master/appPokemon/assets/imagenes/pokemon/Ditto.png'
            },
            { nombre: 'Dratini',
                imagen: 'https://github.com/Oyam16/prueba-twj-UtrerasJavier/blob/master/appPokemon/assets/imagenes/pokemon/Dratini.png'
            },
            { nombre: 'Fearow',
                imagen: 'https://github.com/Oyam16/prueba-twj-UtrerasJavier/blob/master/appPokemon/assets/imagenes/pokemon/Fearow.png'
            },
        ];
        this.pokemonSeleccionado = { nombre: '', imagen: '' };
        this.tipos1 = ['Acero', 'Agua', 'Bicho', 'Dragón', 'Eléctrico', 'Fantasma', 'Fuego', 'Hada', 'Hielo', 'Lucha', 'Normal', 'Planta', 'Psíquico', 'Roca', 'Siniestro', 'Tierra', 'Veneno', 'Volador'];
        this.tipos2 = ['Acero', 'Agua', 'Bicho', 'Dragón', 'Eléctrico', 'Fantasma', 'Fuego', 'Hada', 'Hielo', 'Lucha', 'Normal', 'Planta', 'Psíquico', 'Roca', 'Siniestro', 'Tierra', 'Veneno', 'Volador'];
        this.disabledButtons = {
            NuevoPokemonFormSubmitButton: false
        };
    }
    CrearPokemonComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._ActivatedRoute
            .params
            .subscribe(function (parametros) {
            _this._parametros = parametros;
        });
    };
    CrearPokemonComponent.prototype.crearPokemon = function (formulario) {
        var _this = this;
        console.log(formulario);
        console.log(this.pokemonSeleccionado.nombre);
        var nuevoPokemon = {
            idEntrenador: this._parametros.idEntrenador,
            nombre: formulario.value.nombre,
            tipo1: formulario.value.tipo1,
            tipo2: formulario.value.tipo2,
        };
        console.log(nuevoPokemon);
        this.disabledButtons.NuevoPokemonFormSubmitButton = true;
        this._PokemonService.create(nuevoPokemon)
            .subscribe(function (res) {
            _this.nuevoPokemon = {};
            _this.disabledButtons.NuevoPokemonFormSubmitButton = false;
        }, function (err) {
            console.log(err);
        });
    };
    CrearPokemonComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'app-crear-pokemon',
            template: __webpack_require__(523),
            styles: [__webpack_require__(516)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__Services_pokemon_service__["a" /* PokemonService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__Services_pokemon_service__["a" /* PokemonService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */]) === 'function' && _b) || Object])
    ], CrearPokemonComponent);
    return CrearPokemonComponent;
    var _a, _b;
}());
//# sourceMappingURL=crear-pokemon.component.js.map

/***/ }),

/***/ 308:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InicioComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InicioComponent = (function () {
    function InicioComponent() {
        this.titulo = "Bienvenido";
    }
    InicioComponent.prototype.ngOnInit = function () {
    };
    InicioComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'app-inicio',
            template: __webpack_require__(524),
            styles: [__webpack_require__(517)]
        }), 
        __metadata('design:paramtypes', [])
    ], InicioComponent);
    return InicioComponent;
}());
//# sourceMappingURL=inicio.component.js.map

/***/ }),

/***/ 309:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Services_entrenador_service__ = __webpack_require__(191);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListaEntrenadorComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListaEntrenadorComponent = (function () {
    function ListaEntrenadorComponent(_EntrenadorService) {
        this._EntrenadorService = _EntrenadorService;
        this.entrenadores = [];
        this.regiones = ['Alola.',
            'Johto.',
            'Kanto.',
            'Hoenn.',
            'Teselia.',
            'Sinnoh.',
            'Kalos.',
            'Islas Sete'];
        this.disabledButtons = {
            NuevoEntrenadorFormSubmitButton: false
        };
    }
    ListaEntrenadorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._EntrenadorService.get()
            .subscribe(function (res) {
            _this.entrenadores = res.json()
                .map(function (value) {
                value.formularioCerrado = true;
                return value;
            });
            console.log('entrenadores', _this.entrenadores);
        }, function (err) {
            console.log(err);
        });
    };
    ListaEntrenadorComponent.prototype.actualizarEntrenador = function (entrenador) {
        var _this = this;
        console.log(entrenador.id);
        this._EntrenadorService.update(entrenador, entrenador.id)
            .subscribe(function (res) {
            console.log("No hubo Errores");
            console.log(res);
            entrenador.formularioCerrado = !entrenador.formularioCerrado;
            console.log("Respuesta:", res.json());
        }, function (err) {
            _this.disabledButtons.NuevoEntrenadorFormSubmitButton = false;
            console.log("Ocurrio un error", err);
        }, function () {
            console.log("Termino la función ");
        });
    };
    ListaEntrenadorComponent.prototype.borrarEntrenador = function (idEntrenador) {
        var _this = this;
        console.log('entro en borrar entrenador');
        this._EntrenadorService.delete(idEntrenador)
            .subscribe(function (res) {
            console.log('borrado correctamente');
            var entrenadorBorrado = res.json();
            _this.entrenadores = _this.entrenadores.filter(function (value) { return entrenadorBorrado.id != value.id; });
        }, function (err) {
            console.log(err);
        });
    };
    ListaEntrenadorComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'app-lista-entrenador',
            template: __webpack_require__(525),
            styles: [__webpack_require__(518)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__Services_entrenador_service__["a" /* EntrenadorService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__Services_entrenador_service__["a" /* EntrenadorService */]) === 'function' && _a) || Object])
    ], ListaEntrenadorComponent);
    return ListaEntrenadorComponent;
    var _a;
}());
//# sourceMappingURL=lista-entrenador.component.js.map

/***/ }),

/***/ 310:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Services_pokemon_service__ = __webpack_require__(193);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListaPokemonComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListaPokemonComponent = (function () {
    function ListaPokemonComponent(_PokemonService) {
        this._PokemonService = _PokemonService;
        this.disabledButtons = {
            NuevoPokemonFormSubmitButton: false
        };
        this.pokemons = [];
        this.pokemonsLista = [
            { nombre: 'Abra',
                imagen: 'https://github.com/Oyam16/prueba-twj-UtrerasJavier/blob/master/appPokemon/assets/imagenes/pokemon/Abra.png'
            },
            { nombre: 'Aereodactyl',
                imagen: 'https://github.com/Oyam16/prueba-twj-UtrerasJavier/blob/master/appPokemon/assets/imagenes/pokemon/Aerodactyl.png'
            },
            { nombre: 'Arbok',
                imagen: 'https://github.com/Oyam16/prueba-twj-UtrerasJavier/blob/master/appPokemon/assets/imagenes/pokemon/Arbok.png'
            },
            { nombre: 'Arcanine',
                imagen: 'https://github.com/Oyam16/prueba-twj-UtrerasJavier/blob/master/appPokemon/assets/imagenes/pokemon/Arcanine.png'
            },
            { nombre: 'Abra',
                imagen: 'https://github.com/Oyam16/prueba-twj-UtrerasJavier/blob/master/appPokemon/assets/imagenes/pokemon/Abra.png'
            },
            { nombre: 'Articuno',
                imagen: 'https://github.com/Oyam16/prueba-twj-UtrerasJavier/blob/master/appPokemon/assets/imagenes/pokemon/Articuno.png'
            },
            { nombre: 'Beedrill',
                imagen: 'https://github.com/Oyam16/prueba-twj-UtrerasJavier/blob/master/appPokemon/assets/imagenes/pokemon/Beedrill.png'
            },
            { nombre: 'Charizard',
                imagen: 'https://github.com/Oyam16/prueba-twj-UtrerasJavier/blob/master/appPokemon/assets/imagenes/pokemon/Charizard.png'
            },
            { nombre: 'Ditto',
                imagen: 'https://github.com/Oyam16/prueba-twj-UtrerasJavier/blob/master/appPokemon/assets/imagenes/pokemon/Ditto.png'
            },
            { nombre: 'Dratini',
                imagen: 'https://github.com/Oyam16/prueba-twj-UtrerasJavier/blob/master/appPokemon/assets/imagenes/pokemon/Dratini.png'
            },
            { nombre: 'Fearow',
                imagen: 'https://github.com/Oyam16/prueba-twj-UtrerasJavier/blob/master/appPokemon/assets/imagenes/pokemon/Fearow.png'
            },
        ];
        this.tipos1 = ['Acero', 'Agua', 'Bicho', 'Dragón', 'Eléctrico', 'Fantasma', 'Fuego', 'Hada', 'Hielo', 'Lucha', 'Normal', 'Planta', 'Psíquico', 'Roca', 'Siniestro', 'Tierra', 'Veneno', 'Volador'];
        this.tipos2 = ['Acero', 'Agua', 'Bicho', 'Dragón', 'Eléctrico', 'Fantasma', 'Fuego', 'Hada', 'Hielo', 'Lucha', 'Normal', 'Planta', 'Psíquico', 'Roca', 'Siniestro', 'Tierra', 'Veneno', 'Volador'];
    }
    ListaPokemonComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._PokemonService.get()
            .subscribe(function (res) {
            _this.pokemons = res.json()
                .map(function (value) {
                value.formularioCerrado = true;
                return value;
            });
            console.log('pokemons', _this.pokemons);
        }, function (err) {
            console.log(err);
        });
    };
    ListaPokemonComponent.prototype.actualizarPokemon = function (pokemon) {
        var _this = this;
        console.log(pokemon.id);
        this._PokemonService.update(pokemon, pokemon.id)
            .subscribe(function (res) {
            console.log("No hubo Errores");
            console.log(res);
            pokemon.formularioCerrado = !pokemon.formularioCerrado;
            console.log("Respuesta:", res.json());
        }, function (err) {
            _this.disabledButtons.NuevoPokemonFormSubmitButton = false;
            console.log("Ocurrio un error", err);
        }, function () {
            console.log("Termino la función ");
        });
    };
    ListaPokemonComponent.prototype.borrarPokemon = function (idPokemon) {
        var _this = this;
        console.log('entro en borrar entrenador');
        this._PokemonService.delete(idPokemon)
            .subscribe(function (res) {
            console.log('borrado correctamente');
            var pokemonBorrado = res.json();
            _this.pokemons = _this.pokemons.filter(function (value) { return pokemonBorrado.id != value.id; });
        }, function (err) {
            console.log(err);
        });
    };
    ListaPokemonComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'app-lista-pokemon',
            template: __webpack_require__(526),
            styles: [__webpack_require__(519)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__Services_pokemon_service__["a" /* PokemonService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__Services_pokemon_service__["a" /* PokemonService */]) === 'function' && _a) || Object])
    ], ListaPokemonComponent);
    return ListaPokemonComponent;
    var _a;
}());
//# sourceMappingURL=lista-pokemon.component.js.map

/***/ }),

/***/ 339:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 339;


/***/ }),

/***/ 340:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(427);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(458);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(460);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 457:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(521),
            styles: [__webpack_require__(514)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 458:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(418);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(457);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__crear_entrenador_crear_entrenador_component__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__inicio_inicio_component__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__crear_pokemon_crear_pokemon_component__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__lista_entrenador_lista_entrenador_component__ = __webpack_require__(309);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__lista_pokemon_lista_pokemon_component__ = __webpack_require__(310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__routes__ = __webpack_require__(459);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__Services_entrenador_service__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__Services_pokemon_service__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__Services_master_url_service__ = __webpack_require__(192);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__crear_entrenador_crear_entrenador_component__["a" /* CrearEntrenadorComponent */],
                __WEBPACK_IMPORTED_MODULE_6__inicio_inicio_component__["a" /* InicioComponent */],
                __WEBPACK_IMPORTED_MODULE_7__crear_pokemon_crear_pokemon_component__["a" /* CrearPokemonComponent */],
                __WEBPACK_IMPORTED_MODULE_8__lista_entrenador_lista_entrenador_component__["a" /* ListaEntrenadorComponent */],
                __WEBPACK_IMPORTED_MODULE_9__lista_pokemon_lista_pokemon_component__["a" /* ListaPokemonComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_10__routes__["a" /* RutasAppModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_11__Services_entrenador_service__["a" /* EntrenadorService */],
                __WEBPACK_IMPORTED_MODULE_12__Services_pokemon_service__["a" /* PokemonService */],
                __WEBPACK_IMPORTED_MODULE_13__Services_master_url_service__["a" /* MasterURLService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 459:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__inicio_inicio_component__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__crear_entrenador_crear_entrenador_component__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lista_entrenador_lista_entrenador_component__ = __webpack_require__(309);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__crear_pokemon_crear_pokemon_component__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__lista_pokemon_lista_pokemon_component__ = __webpack_require__(310);
/* unused harmony export routes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RutasAppModule; });






var routes = [
    { path: '', redirectTo: 'inicio', pathMatch: 'full' },
    { path: 'inicio', component: __WEBPACK_IMPORTED_MODULE_1__inicio_inicio_component__["a" /* InicioComponent */] },
    { path: 'entrenador', component: __WEBPACK_IMPORTED_MODULE_2__crear_entrenador_crear_entrenador_component__["a" /* CrearEntrenadorComponent */] },
    { path: 'listaEntrenador', component: __WEBPACK_IMPORTED_MODULE_3__lista_entrenador_lista_entrenador_component__["a" /* ListaEntrenadorComponent */] },
    { path: 'pokemon/:idEntrenador', component: __WEBPACK_IMPORTED_MODULE_4__crear_pokemon_crear_pokemon_component__["a" /* CrearPokemonComponent */] },
    { path: 'listaPokemon', component: __WEBPACK_IMPORTED_MODULE_5__lista_pokemon_lista_pokemon_component__["a" /* ListaPokemonComponent */] }
];
var RutasAppModule = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forRoot(routes);
//# sourceMappingURL=routes.js.map

/***/ }),

/***/ 460:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 514:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(42)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 515:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(42)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 516:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(42)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 517:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(42)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 518:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(42)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 519:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(42)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 521:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\n  <div class=\"container-fluid\">\n    <!-- Brand and toggle get grouped for better mobile display -->\n\n\n    <!-- Collect the nav links, forms, and other content for toggling -->\n    <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n      <ul class=\"nav navbar-nav\">\n        <li>\n          <a  [routerLink]=\"['/']\">\n            INICIO\n          </a>\n        </li>\n\n        <li class=\"dropdown\">\n          <a  class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">Entrenador <span class=\"caret\"></span></a>\n          <ul class=\"dropdown-menu\">\n            <li><a  [routerLink]=\"['/entrenador']\">Registrar Entrenador</a></li>\n            <li><a  [routerLink]=\"['/listaEntrenador']\">Lista de Entrenadores</a></li>\n\n          </ul>\n        </li>\n        <li>\n          <a  [routerLink]=\"['/listaPokemon']\">\n            Lista Pokemon\n          </a>\n        </li>\n        <br><br>\n        <router-outlet></router-outlet>\n      </ul>\n\n    </div><!-- /.navbar-collapse -->\n  </div><!-- /.container-fluid -->\n</nav>\n\n\n"

/***/ }),

/***/ 522:
/***/ (function(module, exports) {

module.exports = "<h1>{{titulo}}</h1>\n\n<div class=\"row\">\n  <div class=\"col-md-12\">\n    <form class=\"animated bounceIn\" (ngSubmit)=\"crearEntrenador(NuevoEntrenadorForm)\" #NuevoEntrenadorForm=\"ngForm\">\n\n      <div class=\"form-group\">\n        <label for=\"nombre\">Nombre</label>\n        <input type=\"text\" class=\"form-control\" id=\"nombre\"\n               required\n               [(ngModel)]=\"nuevoEntrenador.nombres\" name=\"nombre\"\n               #nombre=\"ngModel\">\n        <div [hidden]=\"nombre.valid || nombre.pristine\"\n             class=\"alert alert-danger\">\n          Nombre es requerido\n        </div>\n      </div>\n      <div class=\"form-group\">\n\n        <label><h3>Fecha inicio de Entrenador</h3></label>\n\n        <!--<div class=\"animated slideInUp\" [hidden]=\"!pais.errors\">-->\n\n        <!--<span style=\"font-size:40px\" class=\"bg-primary\" *ngIf=\"pais.errors && (pais.dirty || pais.touched)\" >Ingrese un Pais minimo con 4 caracteres </span>-->\n\n        <!--</div>-->\n\n        <input\n\n               type=\"date\"\n               class=\"form-control\"\n\n               name=\"fecha\"\n               [(ngModel)]=\"nuevoEntrenador.fechaInicio\"\n               #fecha=\"ngModel\"\n               >\n\n      </div>\n      <div class=\"form-group\">\n        <label for=\"power\">Region</label>\n        <select class=\"form-control\" id=\"power\"\n                required\n                [(ngModel)]=\"nuevoEntrenador.Region\" name=\"power\"\n                #power=\"ngModel\">\n          <option *ngFor=\"let pow of regiones\" [value]=\"pow\">{{pow}}</option>\n        </select>\n        <div [hidden]=\"power.valid || power.pristine\" class=\"alert alert-danger\">\n          Region es Requerida\n        </div>\n      </div>\n\n\n      <button [disabled]=\"disabledButtons.NuevoEntrenadorFormSubmitButton||!NuevoEntrenadorForm.valid\" type=\"submit\"\n\n              class=\"btn btn-block btn-success\">Crear\n\n      </button>\n\n\n    </form>\n    <h3>Para ver todos los entrenadores registrados <span> <button [routerLink]=\"['/listaEntrenador']\" class=\"btn btn-link\">Click Aqui</button></span> </h3>\n\n  </div>\n</div>\n\n\n\n"

/***/ }),

/***/ 523:
/***/ (function(module, exports) {

module.exports = "{{nuevoPokemon|json}}\n{{pokemonSeleccionado|json}}\n\n<div style='background-color:white;color:black;'>\n  <form class=\"animated bounceIn\" (ngSubmit)=\"crearPokemon(nuevoPokemonForm)\" #nuevoPokemonForm=\"ngForm\" >\n\n    <div class=\"form-group\">\n      <label for=\"nombre\">Nombre</label>\n      <select class=\"form-control\" id=\"nombre\"\n              required\n              [(ngModel)]=\"nuevoPokemon.nombre\" name=\"nombre\"\n              #nombre=\"ngModel\">\n        <option *ngFor=\"let pow of pokemons\" [value]=\"pow.nombre\">{{pow.nombre}}  </option>\n\n\n      </select>\n\n    </div>\n    <div class=\"form-group\">\n      <label for=\"tipo1\">Tipo 1</label>\n      <select class=\"form-control\" id=\"tipo1\"\n              required\n              [(ngModel)]=\"nuevoPokemon.tipo1\" name=\"tipo1\"\n              #tipo2=\"ngModel\">\n        <option *ngFor=\"let tipo1 of tipos1\" [value]=\"tipo1\">{{tipo1}}</option>\n      </select>\n\n    </div>\n    <div class=\"form-group\">\n      <label for=\"tipo2\">Tipo 2</label>\n      <select class=\"form-control\" id=\"tipo2\"\n              required\n              [(ngModel)]=\"nuevoPokemon.tipo2\" name=\"tipo2\"\n              #tipo2=\"ngModel\">\n        <option *ngFor=\"let pow of tipos2\" [value]=\"pow\">{{pow}}</option>\n      </select>\n\n    </div>\n\n\n\n\n    <br>\n\n    <button type=\"submit\" class=\"btn btn-success\">Crear Pokemon</button>\n    <button class=\"btn btn-link\" [routerLink]=\"['/listaPokemon']\" >Ver lista de Pokemons</button>\n\n  </form>\n\n</div>\n\n\n"

/***/ }),

/***/ 524:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1 >{{titulo}}</h1>\n\n\n  <div class=\"jumbotron\">\n    <h1>Maestro POKEMON!</h1>\n    <p>Registrate como entrenador con tus pokemons para compartirlas por la web :) </p>\n    <a class=\"btn btn-primary btn-lg\" [routerLink]=\"['/entrenador']\" role=\"button\">Click para registrarte como Entrenador</a>\n\n  </div>\n</div>\n\n"

/***/ }),

/***/ 525:
/***/ (function(module, exports) {

module.exports = "<h1>{{titulo}}</h1>\n\n<div class=\"row\">\n  <div class=\"col-sm-12\">\n   <span><a [routerLink]=\"['/listaPokemon']\">Ver lista de  Pokemons</a></span>\n  </div>\n  <div class=\"col-sm-12 animated flipInX\" *ngFor=\"let entrenador of entrenadores\">\n\n\n    <div class=\"text-center\">\n      <p>ID {{entrenador.id}}</p>\n      <h3>{{entrenador.nombres}}</h3>\n      <p>Fecha de Inicio : {{entrenador.fechaInicio | date}}</p>\n      <p>Region: {{entrenador.Region}}</p>\n    </div>\n\n    <div class=\"row animated flipInY\" [hidden]=\"!entrenador.formularioCerrado\">\n\n      <div class=\"col-sm-5\">\n        <button class=\"btn btn-block btn-info\"\n                (click)=\"entrenador.formularioCerrado = !entrenador.formularioCerrado\"\n        >Actualizar</button>\n      </div>\n\n      <div class=\"col-sm-2\"></div>\n\n      <div class=\"col-sm-5\">\n\n        <button class=\"btn btn-block btn-danger\" (click)=\"borrarEntrenador(entrenador.id)\">Borrar</button>\n\n      </div>\n\n      <div class=\"col-sm-12\">\n        <a [routerLink]=\"['/pokemon',entrenador.id]\">Agregar Pokemon</a>\n      </div>\n\n\n    </div>\n\n    <div class=\"div\" [hidden]=\"entrenador.formularioCerrado\">\n\n      <form action=\"\">\n        <form class=\"animated bounceIn\" (ngSubmit)=\"actualizarEntrenador(entrenador)\" #NuevoEntrenadorForm=\"ngForm\">\n\n          <div class=\"form-group\">\n            <label>Nombre del Entrenador</label>\n            <input required\n                   minlength=\"4\"\n                   type=\"text\"\n                   class=\"form-control\"\n                   placeholder=\"Digite un nombre de nombre como: Luis\"\n                   name=\"nombre\"\n                   [(ngModel)]=\"entrenador.nombres\"\n                   #nombre=\"ngModel\"\n                   #nombreElm>\n          </div>\n          <div class=\"form-group\">\n\n            <label><h3>Fecha inicio de Entrenador</h3></label>\n\n            <!--<div class=\"animated slideInUp\" [hidden]=\"!pais.errors\">-->\n\n            <!--<span style=\"font-size:40px\" class=\"bg-primary\" *ngIf=\"pais.errors && (pais.dirty || pais.touched)\" >Ingrese un Pais minimo con 4 caracteres </span>-->\n\n            <!--</div>-->\n\n            <input\n\n              type=\"date\"\n              class=\"form-control\"\n\n              name=\"fecha\"\n              [(ngModel)]=\"entrenador.fechaInicio\"\n              #fecha=\"ngModel\"\n            >\n\n          </div>\n          <div class=\"form-group\">\n            <label for=\"power\">Region</label>\n            <select class=\"form-control\" id=\"power\"\n                    required\n                    [(ngModel)]=\"entrenador.Region\" name=\"power\"\n                    #power=\"ngModel\">\n              <option *ngFor=\"let pow of regiones\" [value]=\"pow\">{{pow}}</option>\n            </select>\n            <div [hidden]=\"power.valid || power.pristine\" class=\"alert alert-danger\">\n              Region es Requerida\n            </div>\n          </div>\n\n          <button [disabled]=\"disabledButtons.NuevoEntrenadorFormSubmitButton||!NuevoEntrenadorForm.valid\" type=\"submit\"\n                  class=\"btn btn-block btn-success\">Update\n\n          </button>\n\n          <button type=\"button\"\n                  class=\"btn btn-block btn-warning\"\n                  (click)=\"entrenador.formularioCerrado = !entrenador.formularioCerrado\">\n            Cancelar\n          </button>\n        </form>\n      </form>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 526:
/***/ (function(module, exports) {

module.exports = "<h1>{{titulo}}</h1>\n\n<div class=\"row\">\n\n  <div class=\"col-sm-12 animated flipInX\" *ngFor=\"let pokemon of pokemons\">\n\n    <div class=\"text-center\">\n\n      <h3>{{pokemon.nombre}}</h3>\n      <p>Entrenador: {{pokemon.idEntrenador.nombres}}</p>\n      <p>tipo1: {{pokemon.tipo1}}</p>\n      <p>tipo2: {{pokemon.tipo2 }}</p>\n\n    </div>\n\n    <div class=\"row animated flipInY\" [hidden]=\"!pokemon.formularioCerrado\">\n\n      <div class=\"col-sm-5\">\n        <button class=\"btn btn-block btn-info\"\n                (click)=\"pokemon.formularioCerrado = !pokemon.formularioCerrado\"\n        >Actualizar</button>\n      </div>\n\n      <div class=\"col-sm-2\"></div>\n\n      <div class=\"col-sm-5\">\n\n        <button class=\"btn btn-block btn-danger\" (click)=\"borrarPokemon(pokemon.id)\">Borrar</button>\n\n      </div>\n\n\n\n    </div>\n\n    <div class=\"div\" [hidden]=\"pokemon.formularioCerrado\">\n\n      <form action=\"\">\n        <form class=\"animated bounceIn\" (ngSubmit)=\"actualizarPokemon(pokemon)\" #nuevoPokemonForm=\"ngForm\">\n\n          <div class=\"form-group\">\n            <label for=\"nombre\">Nombre</label>\n            <select class=\"form-control\" id=\"nombre\"\n                    required\n                    [(ngModel)]=\"pokemon.nombre\" name=\"nombre\"\n                    #nombre=\"ngModel\">\n              <option *ngFor=\"let pow of pokemonsLista\" [value]=\"pow.nombre\">{{pow.nombre}}  </option>\n\n\n            </select>\n\n          </div>\n          <div class=\"form-group\">\n            <label for=\"tipo1\">Tipo 1</label>\n            <select class=\"form-control\" id=\"tipo1\"\n                    required\n                    [(ngModel)]=\"pokemon.tipo1\" name=\"tipo1\"\n                    #tipo2=\"ngModel\">\n              <option *ngFor=\"let tipo1 of tipos1\" [value]=\"tipo1\">{{tipo1}}</option>\n            </select>\n\n          </div>\n          <div class=\"form-group\">\n            <label for=\"tipo2\">Tipo 2</label>\n            <select class=\"form-control\" id=\"tipo2\"\n                    required\n                    [(ngModel)]=\"pokemon.tipo2\" name=\"tipo2\"\n                    #tipo2=\"ngModel\">\n              <option *ngFor=\"let pow of tipos2\" [value]=\"pow\">{{pow}}</option>\n            </select>\n\n          </div>\n\n          <button [disabled]=\"disabledButtons.NuevoPokemonFormSubmitButton||!nuevoPokemonForm.valid\" type=\"submit\"\n                  class=\"btn btn-block btn-success\">Update\n\n          </button>\n\n          <button type=\"button\"\n                  class=\"btn btn-block btn-warning\"\n                  (click)=\"album.formularioCerrado = !album.formularioCerrado\">\n            Cancelar\n          </button>\n        </form>\n      </form>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 544:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(340);


/***/ })

},[544]);
//# sourceMappingURL=main.bundle.js.map