/**
 * Pokemon.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    nombre:{
      type:'string',
      required:true
    },
    imagen:{
      type:'string'
    },
    tipo1:{
      type:'string',

    },tipo2:{
      type:'string',

    },
    idEntrenador:{
        model: 'Entrenador',

    }

  }
};
