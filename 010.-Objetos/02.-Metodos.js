let persona = {
    nombre: 'Juan',
    apellido: 'Perez',
    email: 'jperez@email.com',
    edad: 28,
    nombreCompleto: function(){
        return this.nombre + ' ' + this.apellido;
    }
}

console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.nombreCompleto())