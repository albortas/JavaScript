//Constructor
function Persona(nombre, apellido, email){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.nombreCompleto = function(){
        return this.nombre + ' ' + this.apellido;
    }
}

let padre = new Persona('Juan', 'Perez', 'jperez@email.com');
console.log(padre);
console.log(padre.nombreCompleto());

let madre = new Persona('Laura', 'Quintero', 'lquinteo@email.com');
console.log(madre);
console.log(madre.nombreCompleto());