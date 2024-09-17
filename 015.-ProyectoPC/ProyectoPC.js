class DispositivoEntrada{
    constructor(entrada,marca){
        this._tipoEntrada = entrada;
        this._marca = marca;
    }

    get getTipoEntrada(){
        return this._tipoEntrada;
    }
    
    set setTipoEntrada(entrada){
        this._tipoEntrada = entrada;
    }

    get getMarca(){
        return this._marca;
    }

    set setMarca(marca){
        this._marca = marca;
    }

    toString(){
        return `Tipo Entrada: ${this._tipoEntrada}, Marca: ${this._marca}`
    }
}

class Raton extends DispositivoEntrada{
    static contadorRatones = 0;
    constructor(entrada,marca){
        super(entrada,marca);
        this._idRaton = ++Raton.contadorRatones;
    }

    toString(){
        return `Raton: [Id Raton: ${this._idRaton}, ${super.toString()}]`
    }
}

class Teclado extends DispositivoEntrada{
    static contadorTeclado = 0;
    constructor(entrada,marca){
        super(entrada,marca);
        this._idTeclado = ++Teclado.contadorTeclado;
    }

    toString(){
        return `Teclado: [Id Teclado: ${this._idTeclado}, ${super.toString()}]`;
    }
}

class Monitor{
    static contadorMonitores = 0;
    constructor(marca,tamanio){
        this._idMonitor = ++Monitor.contadorMonitores;
        this._marca = marca;
        this._tamanio = tamanio;
    }

    get getIdMonitor(){
        return this._idMonitor;
    }

    get getMarca(){
        return this._marca;
    }

    set setMarca(marca){
        this._marca = marca;
    }

    get getTamanio(){
        return this._tamanio;
    }

    set setTamanio(tamanio){
        this._tamanio = tamanio;
    }

    toString(){
        return `Monitor: [Id Monitor: ${this._idMonitor}, Marca: ${this._marca}, Tamaño: ${this._tamanio}]`;
    }
}

class Computadora{
    static contadorComputadora = 0;   
    constructor(nombre,monitor,teclado,raton){
        this._idComputadora = ++Computadora.contadorComputadora;
        this._nombre = nombre;
        this._monitor = monitor;
        this._teclado = teclado;
        this._raton = raton;
    }
    get getIdComputadora(){
        return this._idComputadora;
    }
    get getNombre(){
        return this._nombre;
    }
    set setNombre(nombre){
        this._nombre = nombre;
    }
    get getMonitor(){
        return this._monitor;
    }
    set setMonitor(monitor){
        this._monitor = monitor;
    }
    get getTeclado(){
        return this._teclado;
    }
    set setTeclado(teclado){
        this._teclado = teclado;
    }
    get getRaton(){
        return this._raton;
    }
    set setRaton(raton){
        this._raton = raton;
    }

    toString(){
        let mostrar = `     Computadora: ${this._idComputadora}
            Nombre: ${this._nombre}
            ${this._monitor.toString()}
            ${this._teclado.toString()}
            ${this._raton.toString()}`;
        return mostrar;
    }
}

class Orden{
    static contadorOrdenes = 0;
    constructor(){
        this._idOrden = ++Orden.contadorOrdenes;
        this._computadoras = [];
    }
    agregarComputadora(computadora){
        this._computadoras.push(computadora);
    }
    mostrarOrden(){
        let mostrar = ``;
        for(let compu of this._computadoras){
            mostrar += `\n${compu.toString()}`
        }
        console.log(`Id Orden: ${this._idOrden} ${mostrar}`)
    }
}


let raton1 = new Raton('usb','dell');
let raton2 = new Raton('usb','delux')
let teclado1 = new Teclado('usb', 'hp');
let teclado2 = new Teclado('usb', 'delux');
let monitor1 = new Monitor('hp','23 plg');
let monitor2 = new Monitor('samsung','19 plg');
let computadora1 = new Computadora('Delta',monitor1,teclado1,raton1);
let computadora2 = new Computadora('HP',monitor2,teclado2,raton2);
let orden1 = new Orden();
orden1.agregarComputadora(computadora1);
orden1.agregarComputadora(computadora2);
orden1.mostrarOrden()
