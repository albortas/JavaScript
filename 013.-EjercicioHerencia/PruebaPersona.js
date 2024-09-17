class Persona{
    static contadorPersona = 0;
    constructor(nombre, apellido, edad){
        this._idPersona = ++Persona.contadorPersona;
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
    }

    get getIdPersona(){
        return this._idPersona;
    }

    get getNombre(){
        return this._nombre;
    }

    set setNombre(nombre){
        this._nombre = nombre;
    }

    get getApellido(){
        return this._apellido;
    }

    set setApellido(apellido){
        this._apellido = apellido;
    }

    get getEdad(){
        return this._edad;
    }

    set setEdad(edad){
        this._edad = edad;
    }

    toString(){
        return `ID Persona: ${this._idPersona}  Nombre: ${this._nombre} ${this._apellido}, Edad: ${this._edad}`;
    }
}

class Empleado extends Persona{
    static contadorEmpleado = 0;
    constructor(nombre,apellido,edad,sueldo){
        super(nombre,apellido,edad);
        this._idEmpleado = ++Empleado.contadorEmpleado;
        this._sueldo = sueldo;
    }

    get getIdEmpleado(){
        return this._idEmpleado;
    }

    get getSueldo(){
        return this._sueldo;
    }

    set setSueldo(sueldo){
        this._sueldo = sueldo;
    }

    toString(){
        return `ID Empleado: ${this._idEmpleado} ${super.toString()} Sueldo: ${this._sueldo}`;
    }
}

class Cliente extends Persona{
    static contadorCliente = 0;
    constructor(nombre, apellido, edad, fechaRegistro){
        super(nombre,apellido, edad);
        this._idCliente = ++Cliente.contadorCliente;
        this._fechaRegistro = fechaRegistro;
    }

    get getIdCliente(){
        return this._idCliente;
    }

    get getFechaRegistro(){
        return this._fechaRegistro;
    }

    set setFechaRegistro(fechaRegistro){
        this._fechaRegistro = fechaRegistro;
    }

    toString(){
        return `ID Cliente: ${this._idCliente} ${super.toString()} Fecha de Registro: ${this._fechaRegistro}`;
    }
}


let persona1 = new Persona("Juan", "Perez", 32);
console.log(persona1.toString());

let empleado1 = new Empleado("Pedro", "Gomez", "34", 2500);
console.log(empleado1.toString());

let cliente1 = new Cliente("Milenka", "Suaznabar", 28,  new Date());
console.log(cliente1.toString());
