let persona1 = {
    nombre: 'Juan',
    apellido: 'Perez',
    nombreCompleto: function(titulo, tel){
        //return this.nombre + ' ' + this.apellido;
        return titulo + ' ' +this.nombre + ' ' + this.apellido + ' ' + tel ;
    }
}

let persona2 = {
    nombre: 'Karla',
    apellido: 'Juarez',
    email: 'jperez@email.com',
    edad: 28
}

//Uso de apply para usar el metodo nombreCompleto
console.log(persona1.nombreCompleto('lic', '5464654'));


let arreglo = ['Ing', '645413154']
console.log(persona1.nombreCompleto.apply(persona2, arreglo));