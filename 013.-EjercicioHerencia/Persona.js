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