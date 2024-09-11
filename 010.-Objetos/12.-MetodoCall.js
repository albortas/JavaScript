let persona1 = {
    nombre: 'Juan',
    apellido: 'Perez',
    nombreCompleto: function(titulo, tel){
        return titulo + ' ' +this.nombre + ' ' + this.apellido + ' ' + tel ;
    }
}

let persona2 = {
    nombre: 'Karla',
    apellido: 'Juarez',
    email: 'jperez@email.com',
    edad: 28
}

//Uso de call para usar el metodo nombreCompleto
console.log(persona1.nombreCompleto('Ing.', '4577131'));

console.log(persona1.nombreCompleto.call(persona2, 'Ing.', '75416753'));
