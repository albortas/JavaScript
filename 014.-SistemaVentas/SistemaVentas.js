class Producto{
    static contadorProducto = 0;
    constructor(nombre, precio){
        this._idProducto = ++Producto.contadorProducto;
        this._nombre = nombre;
        this._precio = precio;
    }
    
    get getIdProducto(){
        return this._idProducto;
    }

    get getNombre(){
        return this._nombre;
    }

    set setNombre(nombre){
        this._nombre = nombre;
    }

    get getPrecio(){
        return this._precio;
    }

    set setPrecio(precio){
        this._precio = precio;
    }

    toString(){
        return `Id Producto: ${this._idProducto}, Nombre: ${this._nombre}, Precio: $${this._precio}`
    }
}

class Orden{
    static contadorOrden = 0;
    static get MAX_PRODUCTOS(){
        return 5;
    }

    constructor(){
        this._idOrden = ++Orden.contadorOrden;
        this._productos = [];
        this._contadorProductosAgregados = 0;
    }

    get getIdOrden(){
        return this._idOrden;
    }

    agregarProductos(producto){
        if(this._productos.length < Orden.MAX_PRODUCTOS){
            this._productos.push(producto)
        }else{
            console.log('No se pueden agregar mas productos')
        }
    }

    calculartotal(){
        let totaVenta = 0;
        for(let producto of this._productos){
            totaVenta += producto.getPrecio;
        }
        return totaVenta;
    }

    mostrarOrden(){
        let productoOrden = '';
        for(let producto of this._productos){
            productoOrden += '\n{' +producto.toString() + '}';
        }

        console.log(`Orden: ${this._idOrden} Total: ${this.calculartotal()}, Productos: ${productoOrden}`)
    }
}

let producto1 = new Producto('Pantalon',200);
let producto2 = new Producto('Camisa', 100);


let orden1 = new Orden();
orden1.agregarProductos(producto1);
orden1.agregarProductos(producto2);

orden1.mostrarOrden();
