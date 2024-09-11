let persona = {
    nombre: 'Juan',
    apellido: 'Perez',
    email: 'jperez@email.com',
    edad: 28,
    nombreCompleto: function(){
        return this.nombre + ' ' + this.apellido;
    }
}

persona.tel = 76451164;
console.log(persona);

delete persona.tel;
console.log(persona)