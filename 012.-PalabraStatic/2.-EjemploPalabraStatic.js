class Persona{

    static contadorPersona = 0;

    static get MAX_OBJ(){
        return 5;
    }

    constructor(nombre, apellido){
        this.idPersona = ++Persona.contadorPersona;
        this._nombre = nombre;
        if( Persona.contadorPersona < Persona.MAX_OBJ){
            this._apellido = apellido;
        }else{
            console.log("Se ha superado el maximo de objetos permitidos")
        }
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }

    get apellido(){
        return this._apellido;
    }

    set apellido(apellido){
        this._apellido = apellido;
    }

    nombreCompleto(){
        return this.idPersona + " " + this._nombre + " " + this._apellido;
    }
    //Estos sobreescribiendo el meto de la clase padre
    toString(){
        //Se aplica polimorfismo
        return this.nombreCompleto();
    }

    static saludar(){
        console.log("Saludos desde el Metodo Static");
    }

    static saludar2(persona){
        console.log(persona.nombre);
    }
}

class Empleado extends Persona{
    constructor(nombre,apellido,departamento){
        super(nombre,apellido);
        this._departamento = departamento;
    }

    get departamento(){
        return this._departamento;
    }

    set departamento(departamento){
        this._departamento = departamento;
    }
    //Sobreescritura
    nombreCompleto(){
        return super.nombreCompleto() + ", " + this._departamento
    }
}


let persona1 = new Persona("Juan", "Perez");
console.log(persona1.toString());
console.log(persona1);

let empleado1 = new Empleado("Maria", "Jimenez", "Sistemas");
console.log(empleado1.toString());

console.log(Persona.contadorPersona);

console.log(Persona.MAX_OBJ);
Persona.MAX_OBJ = 10;
console.log(Persona.MAX_OBJ);

let persona2 = new Persona("Pedro", "Juarez");
let persona3 = new Persona("Daniel", "Alborta");
let persona4 = new Persona("Alejadro", "Garcia");
let persona5 = new Persona("Milenka", "Suaznabar")
console.log(persona4.toString());
