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