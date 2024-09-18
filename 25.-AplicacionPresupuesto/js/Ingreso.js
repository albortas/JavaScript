class Ingreso extends Dato{
    static contadorIngreso = 0;
    constructor(descripcion,valor){
        super(descripcion, valor);
        this._id = ++Ingreso.contadorIngreso;
    }
    get getId(){
        return this._id;
    }
}