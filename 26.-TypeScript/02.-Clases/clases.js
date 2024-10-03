"use strict";
class Persona {
    constructor(nombre) {
        this.nombre = nombre;
    }
    getNombre() {
        return this.nombre;
    }
}
let persona = new Persona('Juan');
console.log(persona.getNombre());
