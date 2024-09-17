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