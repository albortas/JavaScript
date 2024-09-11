let persona = {
    nombre: 'Juan',
    apellido: 'Perez',
    email: 'jperez@email.com',
    edad: 28
}

console.log(persona.nombre);
console.log(persona.edad);

console.log(persona['apellido']);


//for in

for (propiedad in persona){
    console.log(propiedad);
    console.log(persona [propiedad]);
}