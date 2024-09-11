let persona = {
    nombre: 'Juan',
    apellido: 'Perez',
    email: 'jperez@email.com',
    edad: 28,
    nombreCompleto: function(){
        return this.nombre + ' ' + this.apellido;
    }
}

// Concadenar cada valor de cada propiedad
console.log(persona.nombre + ' ' + persona.apellido);

//for in
for (nombrePropiedad in persona){
    console.log(persona[nombrePropiedad]);
}

//Object

let personaArray = Object.values(persona);
console.log(personaArray);

//Convertir a JSON
let personaString = JSON.stringify(persona);
console.log(personaString)